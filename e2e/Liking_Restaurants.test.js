/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran.', '.restaurant-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran.', '.restaurant-not-found');

  I.amOnPage('/');
  I.wait(2);

  I.seeElement('.resto_item_detail-button');

  const firstRestaurant = locate('.resto_item_detail-button').first();
  const firstRestaurantName = await I.grabTextFrom(
    locate('.resto_item_name').first()
  );

  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto_item_name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran.', '.restaurant-not-found');

  I.amOnPage('/');
  I.wait(2);

  I.seeElement('.resto_item_detail-button');

  const firstRestaurant = locate('.resto_item_detail-button').first();
  const firstRestaurantName = await I.grabTextFrom(
    locate('.resto_item_name').first()
  );

  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto_item_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click('.resto_item_detail-button');
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  const RestaurantEmpty = await I.grabTextFrom('.restaurant-not-found');
  assert.strictEqual('Tidak ada restoran.', RestaurantEmpty);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restoran.', '.restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('.resto_item_detail-button');

  const firstRestaurantName = await I.grabTextFrom(
    locate('.resto_item_name').first()
  );

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto_item_detail-button').at(i));
    I.waitForElement('#likeButton', 3);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');
  const searchQuery = firstRestaurantName.substring(1, 3);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');
  I.waitForElement('.resto-item', 3);

  const visibleLikedRestaurants = await I.grabTextFrom('.resto_item_name');
  assert.strictEqual(visibleLikedRestaurants, firstRestaurantName);
});

Scenario('Add Review', async ({ I }) => {
  I.see('Tidak ada restoran.', '.restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('.resto_item_detail-button');
  I.click(locate('.resto_item_detail-button').first());

  I.waitForElement('.add-review-container', 5);
  I.seeElement('.add-review-container');

  const inputTextReview = 'baik';
  const outputTextReview = 'baik';
  I.fillField('input', 'Dicoding');
  I.fillField('textarea', inputTextReview);

  I.click(locate('.submit-button'));

  I.seeElement('.review_item p', 5);
  I.seeElement('.review_item p');

  const lastReviewText = await I.grabTextFrom(locate('.review_item p').last());

  assert.strictEqual(outputTextReview, lastReviewText);
});
