# Site Cleaner Chrome Extension

A simple Chrome extension with Manifest V3 that helps you clean browser data for the current site.

## Features

- **Clear localStorage**: Removes all localStorage data for the current site
- **Clear Cookies**: Removes all cookies for the current domain
- **Clear Sessions**: Removes all sessionStorage data for the current site
- **Clear Cache**: Clears the cache for the current origin
- **Clear All**: Clears all of the above data at once

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" button
5. Select the directory containing this extension

## Usage

1. Navigate to any website
2. Click on the Site Cleaner extension icon in your browser toolbar
3. Click on any button to clear the corresponding data type:
   - **Clear localStorage**: Clears localStorage for the current site
   - **Clear Cookies**: Clears cookies for the current domain
   - **Clear Sessions**: Clears sessionStorage for the current site
   - **Clear Cache**: Clears cache for the current origin
   - **Clear All**: Clears all data types at once

## Permissions

This extension requires the following permissions:
- `browsingData`: To clear cache data
- `cookies`: To remove cookies
- `storage`: To access browser storage
- `tabs`: To get information about the current tab
- `scripting`: To execute scripts that clear localStorage and sessionStorage
- `host_permissions`: To access all URLs for clearing site-specific data

## Technical Details

- Built with Manifest V3
- Uses Chrome Extension APIs: `chrome.browsingData`, `chrome.cookies`, `chrome.scripting`, `chrome.tabs`
- Clean and modern UI with gradient background

## License

MIT License
