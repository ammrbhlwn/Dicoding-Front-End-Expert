import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view.js';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    document.querySelector('jumbotron-element').style.display = 'none';
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();

    if (!restaurants) {
      console.log(restaurants);
    } else {
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants: FavoriteRestaurantIdb,
      });
      new FavoriteRestaurantSearchPresenter({
        view,
        favoriteRestaurants: FavoriteRestaurantIdb,
      });
    }
  },
};

export default Favorite;
