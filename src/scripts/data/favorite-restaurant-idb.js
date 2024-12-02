/* eslint-disable no-prototype-builtins */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    toggleLoadingIndicator(true);
    try {
      if (!id) {
        return;
      }
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    } finally {
      toggleLoadingIndicator(false);
    }
  },
  async getAllRestaurant() {
    toggleLoadingIndicator(true);
    try {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    } finally {
      toggleLoadingIndicator(false);
    }
  },
  async putRestaurant(restaurant) {
    toggleLoadingIndicator(true);
    try {
      if (!restaurant.hasOwnProperty('id')) {
        return;
      }
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    } catch (error) {
      console.error(error.message);
    } finally {
      toggleLoadingIndicator(false);
    }
  },
  async deleteRestaurant(id) {
    toggleLoadingIndicator(true);
    try {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    } finally {
      toggleLoadingIndicator(false);
    }
  },
  async searchRestaurants(query) {
    return (await this.getAllRestaurant()).filter((restaurant) => {
      const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  },
};

const toggleLoadingIndicator = (isLoading) => {
  const indicator = document.querySelector('loading-indicator');

  if (isLoading && !indicator) {
    const loadingIndicator = document.createElement('loading-indicator');
    document.body.appendChild(loadingIndicator);
  } else if (!isLoading && indicator) {
    document.body.removeChild(indicator);
  }
};

export default FavoriteRestaurantIdb;
