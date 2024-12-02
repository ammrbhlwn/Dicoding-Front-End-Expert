import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './component/AppBar.js';
import './component/SearchBar.js';
import './component/SkipMainContent.js';
import './component/FooterBar.js';
import './component/LoadingIndicator.js';
import App from './views/app';
import swRegister from './utils/sw-register.js';

const button = document.querySelector('#hamburger');
const drawer = document.querySelector('#drawer');
const home = document.querySelector('#drawer');
const favorite = document.querySelector('#drawer');
const content = document.querySelector('main');

const app = new App({ button, drawer, home, favorite, content });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
