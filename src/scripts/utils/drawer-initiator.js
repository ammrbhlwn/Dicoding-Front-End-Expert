const DrawerInitiator = {
  init({ button, drawer, home, favorite }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    home.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    favorite.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    event.preventDefault();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
