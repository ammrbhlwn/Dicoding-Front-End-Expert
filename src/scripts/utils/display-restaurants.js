import {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
} from '../views/templates/template-creator';

function filterRestaurants(restaurants, searchText) {
  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filtered;
}

function displayRestaurants(restaurants, restoList) {
  if (restaurants.length === 0) {
    restoList.innerHTML =
      '<div class="restaurant-not-found">Tidak ada restoran.</div>';
  } else {
    const restaurantItems = restaurants
      .map((restaurant) => createRestaurantListTemplate(restaurant))
      .join('');
    restoList.innerHTML = restaurantItems;
  }
}

function displayDetailRestaurants(restaurants, restoList) {
  const restaurantItem = createRestaurantDetailTemplate(restaurants);
  restoList.innerHTML = restaurantItem;
}

export { filterRestaurants, displayRestaurants, displayDetailRestaurants };
