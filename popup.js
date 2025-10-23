// Get current tab's origin
async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

// Show message to user
function showMessage(text, type = 'success') {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
  
  setTimeout(() => {
    messageDiv.textContent = '';
    messageDiv.className = 'message';
  }, 3000);
}

// Clear localStorage
async function clearLocalStorage() {
  try {
    const tab = await getCurrentTab();
    if (!tab.url) {
      showMessage('Cannot access this page', 'error');
      return;
    }

    // Execute script to clear localStorage in the current tab
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        localStorage.clear();
      }
    });

    showMessage('localStorage cleared successfully!');
  } catch (error) {
    showMessage('Error clearing localStorage: ' + error.message, 'error');
  }
}

// Clear Cookies
async function clearCookies() {
  try {
    const tab = await getCurrentTab();
    const url = new URL(tab.url);
    
    // Get all cookies for the current domain
    const cookies = await chrome.cookies.getAll({ domain: url.hostname });
    
    // Remove each cookie
    for (const cookie of cookies) {
      const protocol = cookie.secure ? 'https:' : 'http:';
      await chrome.cookies.remove({
        url: `${protocol}//${cookie.domain}${cookie.path}`,
        name: cookie.name
      });
    }

    showMessage(`${cookies.length} cookie(s) cleared successfully!`);
  } catch (error) {
    showMessage('Error clearing cookies: ' + error.message, 'error');
  }
}

// Clear Sessions (sessionStorage)
async function clearSessions() {
  try {
    const tab = await getCurrentTab();
    if (!tab.url) {
      showMessage('Cannot access this page', 'error');
      return;
    }

    // Execute script to clear sessionStorage in the current tab
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        sessionStorage.clear();
      }
    });

    showMessage('Sessions cleared successfully!');
  } catch (error) {
    showMessage('Error clearing sessions: ' + error.message, 'error');
  }
}

// Clear Cache
async function clearCache() {
  try {
    const tab = await getCurrentTab();
    const url = new URL(tab.url);
    
    // Clear cache for the current origin
    await chrome.browsingData.removeCache({
      origins: [url.origin]
    });

    showMessage('Cache cleared successfully!');
  } catch (error) {
    showMessage('Error clearing cache: ' + error.message, 'error');
  }
}

// Clear All
async function clearAll() {
  try {
    const tab = await getCurrentTab();
    const url = new URL(tab.url);

    // Clear localStorage and sessionStorage
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        localStorage.clear();
        sessionStorage.clear();
      }
    });

    // Clear cookies
    const cookies = await chrome.cookies.getAll({ domain: url.hostname });
    for (const cookie of cookies) {
      const protocol = cookie.secure ? 'https:' : 'http:';
      await chrome.cookies.remove({
        url: `${protocol}//${cookie.domain}${cookie.path}`,
        name: cookie.name
      });
    }

    // Clear cache
    await chrome.browsingData.removeCache({
      origins: [url.origin]
    });

    showMessage('All data cleared successfully!');
  } catch (error) {
    showMessage('Error clearing all data: ' + error.message, 'error');
  }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('clearLocalStorage').addEventListener('click', clearLocalStorage);
  document.getElementById('clearCookies').addEventListener('click', clearCookies);
  document.getElementById('clearSessions').addEventListener('click', clearSessions);
  document.getElementById('clearCache').addEventListener('click', clearCache);
  document.getElementById('clearAll').addEventListener('click', clearAll);
});
