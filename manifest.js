import fs from 'node:fs';
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  default_locale: 'en',
  name: '__MSG_extensionName__',
  version: packageJson.version,
  description: '__MSG_extensionDescription__',
  permissions: ['storage', 'sidePanel'],
  side_panel: { default_path: 'src/pages/sidepanel/index.html' },
  background: { service_worker: 'src/pages/background/index.js', type: 'module' },
  action: { default_popup: 'src/pages/popup/index.html', default_icon: 'icon-34.png' },
  // options_page: 'src/pages/options/index.html',
  // chrome_url_overrides: { newtab: 'src/pages/newtab/index.html' },
  // devtools_page: 'src/pages/devtools/index.html',
  icons: { 128: 'icon-128.png' },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/contentInjected/index.js'],
    },
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/contentUI/index.js'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'icon-128.png', 'icon-34.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;
