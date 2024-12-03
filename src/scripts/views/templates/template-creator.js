/* eslint-disable indent */
import CONFIG from '../../globals/config.js';

const medium = 'medium/';
const small = 'small/';

const createSkeletonRestaurantListTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
        <div class="resto-item">
          <picture>
            <img class="resto_item_picture lazyload" src="/images/placeholder.png" alt="skeleton">
          </picture>
          
          <div class="text-container">
            <h2 class="skeleton">Lorem ipsum</h2>
            <div class="city-rating">
              <p class="skeleton">Lorem ipsum</p>
              <p class="skeleton">Lorem ipsum</p>
            </div>
            <p class="skeleton">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit libero dolorem magni praesentium incidunt nemo. Eius error vitae dolor magni, quae voluptatum doloribus omnis dicta nostrum libero, aspernatur dolorum aperiam, minima id fugiat obcaecati dolores consequatur tempora rerum ratione? Amet, eos? Iure magni ratione quidem optio in, nulla porro sint praesentium dicta quaerat sit et at quos nemo eius quae eveniet sed, aspernatur voluptas, dolores ea laudantium quo recusandae placeat. Ut dicta beatae consequuntur tempore consectetur necessitatibus quas eum voluptates a. Libero ex esse repudiandae, laborum magni adipisci perferendis! Reiciendis illum quo, beatae doloribus accusantium dolores autem similique unde!</p>
          </div>
        </div>
    `;
  }
  return template;
};

const createSkeletonRestaurantDetailTemplate = () => {
  let template = '';

  template += `
      <div class="resto_detail_picture">
        <picture>
          <img class="resto_item_picture lazyload" src="/images/placeholder.png" alt="skeleton">
        </picture>
      </div>
      <div class="text-container">
        <div class="city-rating">
          <h2 class="skeleton>Lorem Ipsum</h2>
        </div>
        <p class="skeleton">Lorem Ipsum</p>
        <hr>
        <p class="skeleton">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit libero dolorem magni praesentium incidunt nemo. Eius error vitae dolor magni, quae voluptatum doloribus omnis dicta nostrum libero, aspernatur dolorum aperiam, minima id fugiat obcaecati dolores consequatur tempora rerum ratione? Amet, eos? Iure magni ratione quidem optio in, nulla porro sint praesentium dicta quaerat sit et at quos nemo eius quae eveniet sed, aspernatur voluptas, dolores ea laudantium quo recusandae placeat. Ut dicta beatae consequuntur tempore consectetur necessitatibus quas eum voluptates a. Libero ex esse repudiandae, laborum magni adipisci perferendis! Reiciendis illum quo, beatae doloribus accusantium dolores autem similique unde!</p>
      </div>
    `;
  return template;
};

const createRestaurantListTemplate = (restaurant) => `
    <div id="${restaurant.id}" class="resto-item" tabindex="0">
      <picture>
        <source class="lazyload" media="(max-width: 600px)" srcset="${
          CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId
        }">
        <img class="resto_item_picture lazyload" src="/images/placeholder.png" data-src="${
          CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId
        }" alt="Restoran ${restaurant.name || '-'}">
      </picture>
      
      <div class="text-container">
        <h2 class="resto_item_name">${restaurant.name || '-'}</h2>
        <div class="city-rating">
          <p class="resto_item_city">${restaurant.city || '-'}</p>
          <p class="resto_item_rating">⭐️${restaurant.rating || '-'}</p>
        </div>
        <p class="resto_item_detail">${restaurant.description || '-'}</p>
      </div>
      <button class="resto_item_detail-button" onclick="location.href='/#/detail/${
        restaurant.id
      }'" aria-label="Lihat Restoran">Lihat Restoran</button>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
      <div class="resto_detail_picture" tabindex="0">
        <picture>
          <source class="lazyload" media="(max-width: 600px)" srcset="${
            CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId
          }">
          <img class="resto_item_picture lazyload" src="/images/placeholder.png" data-src="${
            CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId
          }" alt="Restoran ${restaurant.name || '-'}">
        </picture>
      </div>
      <div class="text-container" tabindex="0">
        <div class="city-rating">
          <h2 class="resto_detail_name">${restaurant.name || '-'}</h2>
          <div class="liked-rating">
            <div id="likeButtonContainer" class="like-button"></div>
            <p class="resto_detail_rating">⭐️${restaurant.rating || '-'}</p>
          </div>
        </div>
        <p class="resto_detail_city">${restaurant.address || '-'}, ${
  restaurant.city || '-'
}</p>
        <div class="category-container">
          ${
            restaurant.categories
              .map(
                (category) => `
          <div class="resto_detail_category">${category.name}</div>
          `
              )
              .join(' ') || '-'
          }
        </div>
        
        <hr>
        <p class="resto_detail_description">${restaurant.description || '-'}</p>

        <hr>
        <h2 class="label">Menu Makanan</h2>

        <div class="food-container">
          ${restaurant.menus.foods
            .map(
              (food) => `
          <div class="resto_detail_food">${food.name}</div>
          `
            )
            .join(' ')}
        </div>
        
        <hr>

        <h2 class="label">Menu Minuman</h2>

        <div class="drink-container">
          ${restaurant.menus.drinks
            .map(
              (drink) => `
          <div class="resto_detail_drink">${drink.name}</div>
          `
            )
            .join(' ')}
        </div>

        <hr>

        <h2 class="label">Customer Review</h2>

        <div class="review-container">
          ${restaurant.customerReviews
            .map(
              (review) => `
          <div class="review_item">
              <h2>${review.name}</h2>
              <h3>${review.date}</h3>
              <p>${review.review}</p>
          </div>
          `
            )
            .join('')}
        </div>
      </div>
      <form class="add-review-container" aria-labelledby="form-title">
        <h2 tabindex="0">Add Review</h2>
        <div class="input-container">
          <label for="name" tabindex="0">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" class="input-name" required aria-required="true"
      aria-describedby="name-desc" tabindex="0" />
        </div>
        <div class="input-container">
          <label for="review" tabindex="0">Review</label>
          <textarea id="review" name="review" placeholder="Write your review" class="input-review" required aria-required="true"
      aria-describedby="review-desc" tabindex="0"></textarea>
        </div>
        <div class="input-container">
          <button type="submit" class="submit-button" aria-label="Submit your review" tabindex="0">Submit</button>
        </div>
      </form>
`;

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="like-button">
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this restaurant" id="likeButton" class="liked-button">
  </button>
`;

export {
  createSkeletonRestaurantListTemplate,
  createSkeletonRestaurantDetailTemplate,
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
