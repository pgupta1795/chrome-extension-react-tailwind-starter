import SidePanel from '@pages/sidepanel/SidePanel';
import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import '../../assets/css/globals.css';

refreshOnUpdate('pages/sidepanel');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) throw new Error('Can not find #app-container');
  const root = createRoot(appContainer);
  root.render(<SidePanel />);
}

init();
