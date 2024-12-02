/* eslint-disable indent */
import API_ENDPOINT from '../globals/api-endpoint';
import pageNotFound from '../views/pages/page-not-found';

class RestaurantDbSource {
  static async RestaurantList() {
    toggleLoadingIndicator(true);
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);

      if (!response.ok) {
        this._handleError(response.status);
        return;
      }

      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson.restaurants;
    } catch (error) {
      pageNotFound('Please check your network!');
    } finally {
      toggleLoadingIndicator(false);
    }
  }

  static async DetailRestaurant(id) {
    toggleLoadingIndicator(true);

    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));

      if (!response.ok) {
        this._handleError(response.status);
        return;
      }

      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson.restaurant;
    } catch (error) {
      return pageNotFound('An unexpected error occurred');
    } finally {
      toggleLoadingIndicator(false);
    }
  }

  static async addReviewRestaurant(data) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
      const responseJson = await response.json();

      if (!response.ok) {
        this._handleError(response.status);
        return;
      }

      return responseJson;
    } catch (error) {
      return pageNotFound('An unexpected error occurred');
    } finally {
      toggleLoadingIndicator(false);
    }
  }

  static _handleError(status = null) {
    switch (status) {
      case 404:
        pageNotFound('Page not found (404). The resource does not exist.');
        break;
      case 400:
        pageNotFound('Bad request (400). Please check your input.');
        break;
      case 500:
        pageNotFound('Internal server error (500). Please try again later.');
        break;
      default:
        pageNotFound(`An unexpected error occurred (${status}).`);
    }
  }
}

const toggleLoadingIndicator = (isLoading) => {
  const indicator = document.querySelector('loading-indicator');

  if (isLoading && !indicator) {
    const loadingIndicator = document.createElement('loading-indicator');
    document.body.appendChild(loadingIndicator);
  } else if (!isLoading && indicator) {
    document.body.removeChild(indicator);
  }
};

export default RestaurantDbSource;
