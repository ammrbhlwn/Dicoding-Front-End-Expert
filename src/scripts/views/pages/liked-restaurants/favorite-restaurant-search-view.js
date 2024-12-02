import { createRestaurantListTemplate } from '../../templates/template-creator.js';

class FavoriteRestaurantView {
  getTemplate() {
    return `
        <div class="favorite-container">
            <h1 tabindex="0" class="favorite-header">Favorite Restaurants</h1>
            <div class="search-container">
                <input type="text" id="query" placeholder="Search by Name..." aria-label="Search Input">
            </div>   
        </div>
        <div class="favorite" id="restaurants"></div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    const bottomElement = document.querySelector('.bottom');

    if (restaurants.length) {
      if (bottomElement) {
        bottomElement.style.display = 'block';
      }

      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestaurantListTemplate(restaurant)),
        ''
      );
    } else {
      if (bottomElement) {
        bottomElement.style.display = 'none';
      }
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
        <div class="restaurant-not-found">Tidak ada restoran.</div> `;
  }
}

export default FavoriteRestaurantView;
