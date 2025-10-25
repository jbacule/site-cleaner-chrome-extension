export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Site Cleaner
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8">
            A powerful Chrome extension to clean browser data with one click
          </p>
          <a
            href="https://github.com/jbacule/site-cleaner-chrome-extension"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
          >
            View on GitHub
          </a>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🗂️"
              title="Clear localStorage"
              description="Removes all localStorage data for the current site"
            />
            <FeatureCard
              icon="🍪"
              title="Clear Cookies"
              description="Removes all cookies for the current domain"
            />
            <FeatureCard
              icon="📋"
              title="Clear Sessions"
              description="Removes all sessionStorage data for the current site"
            />
            <FeatureCard
              icon="💾"
              title="Clear Cache"
              description="Clears the cache for the current origin"
            />
            <FeatureCard
              icon="🧹"
              title="Clear All"
              description="Clears all of the above data at once"
            />
            <FeatureCard
              icon="⚡"
              title="Manifest V3"
              description="Built with the latest Chrome extension standards"
            />
          </div>
        </div>

        {/* Installation Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Installation</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <span className="pt-1">Clone or download the repository from GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <span className="pt-1">Open Chrome and navigate to <code className="bg-gray-100 px-2 py-1 rounded">chrome://extensions/</code></span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                <span className="pt-1">Enable &quot;Developer mode&quot; by toggling the switch in the top right corner</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                <span className="pt-1">Click &quot;Load unpacked&quot; button</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                <span className="pt-1">Select the directory containing the extension</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Usage Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Use</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <span className="pt-1">Navigate to any website</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <span className="pt-1">Click on the Site Cleaner extension icon in your browser toolbar</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                <span className="pt-1">Click on any button to clear the corresponding data type</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Permissions Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Required Permissions</h2>
            <ul className="space-y-3 text-purple-100">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span><strong className="text-white">browsingData:</strong> To clear cache data</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span><strong className="text-white">cookies:</strong> To remove cookies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span><strong className="text-white">storage:</strong> To access browser storage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span><strong className="text-white">tabs:</strong> To get information about the current tab</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span><strong className="text-white">scripting:</strong> To execute scripts that clear localStorage and sessionStorage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span><strong className="text-white">host_permissions:</strong> To access all URLs for clearing site-specific data</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-purple-100 mt-16">
          <p className="mb-4">Built with ❤️ using Manifest V3</p>
          <p className="text-sm">
            Licensed under MIT License • 
            <a 
              href="https://github.com/jbacule/site-cleaner-chrome-extension" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 underline hover:text-white transition-colors"
            >
              Contribute on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
