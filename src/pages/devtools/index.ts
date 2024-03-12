try {
  chrome.devtools.panels.create(
    'chrome-extension-react-tailwind devtools',
    'icon-34.png',
    'src/pages/panel/index.html',
  );
} catch (e) {
  console.error(e);
}
