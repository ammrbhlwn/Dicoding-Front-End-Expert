class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const id = this.getAttribute('id');
    const name = this.getAttribute('name');
    const description = this.getAttribute('description');
    const pictureId = this.getAttribute('pictureId');
    const city = this.getAttribute('city');
    const rating = this.getAttribute('rating');

    const pictureUrl = `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`;

    this.innerHTML = `
      <div id="${id}" class="resto-item" tabindex="0">
        <img class="picture" src="${pictureUrl}" alt="Restaurant Picture">
        <div class="text-container">
          <h2 class="name">${name}</h2>
          <div class="city-rating">
            <p class="city">${city}</p>
            <p class="rating">⭐️${rating}</p>
          </div>
          <p class="detail">${description}</p>
        </div>
        <button class="restaurant-item__detail-button" onclick="location.href='/#/detail/${id}'">Lihat Restoran</button>
      </div>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);
