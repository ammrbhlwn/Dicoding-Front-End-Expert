/* eslint-disable indent */
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  filterRestaurants,
  displayRestaurants,
} from '../../utils/display-restaurants';
import { createSkeletonRestaurantListTemplate } from '../templates/template-creator';
import '../../component/JumbotronElement';

const Home = {
  async render() {
    return `
    <search-bar></search-bar>
    <restaurant-list class="menu">${createSkeletonRestaurantListTemplate(
      20
    )}</restaurant-list>
    `;
  },

  async afterRender() {
    document.querySelector('#view-resto').addEventListener('click', () => {
      document.querySelector('.menu').scrollIntoView({ behavior: 'smooth' });
    });

    const searchInput = document.querySelector('#query');

    const restaurants = await RestaurantDbSource.RestaurantList();
    const restoList = document.querySelector('.menu');

    const filterAndUpdateUI = () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        searchInput.value
      );
      displayRestaurants(filteredRestaurants, restoList);
    };

    searchInput.addEventListener('input', filterAndUpdateUI);

    displayRestaurants(restaurants, restoList);
  },
};

export default Home;
