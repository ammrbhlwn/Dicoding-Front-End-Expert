import UrlParser from '../../routes/url-parser.js';
import RestaurantDbSource from '../../data/restaurantdb-source.js';
import addReview from '../../utils/add-review-restaurant.js';
import { displayDetailRestaurants } from '../../utils/display-restaurants.js';
import { createSkeletonRestaurantDetailTemplate } from '../templates/template-creator.js';
import LikeButtonPresenter from '../../utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';

const Detail = {
  async render() {
    return `
      <div id="detail-container" class="detail-container">${createSkeletonRestaurantDetailTemplate()}</div>
    `;
  },

  async afterRender() {
    document.querySelector('jumbotron-element').style.display = 'none';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await RestaurantDbSource.DetailRestaurant(url.id);
    const restoDetail = document.querySelector('#detail-container');

    displayDetailRestaurants(restaurantDetail, restoDetail);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurantDetail.id,
        name: restaurantDetail.name,
        pictureId: restaurantDetail.pictureId,
        description: restaurantDetail.description,
        city: restaurantDetail.city,
        rating: restaurantDetail.rating,
      },
    });

    document
      .querySelector('.add-review-container')
      .addEventListener('submit', (event) => {
        const name = event.target.querySelector('.input-name').value;
        const review = event.target.querySelector('.input-review').value;

        addReview({ url: url.id, name, review });

        event.target.reset();
      });
  },
};

export default Detail;
