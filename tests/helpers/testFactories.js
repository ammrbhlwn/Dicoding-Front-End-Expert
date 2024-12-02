import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb.js';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('.likesbutton'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
