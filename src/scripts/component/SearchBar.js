class SearchBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="search-home-container">
            <h1 tabindex="0" class="search-header">Cari Restoran</h1>
            <div class="search-container">
                <input type="text" id="query" placeholder="Search by Name..." aria-label="Search Input">
            </div>   
        </div>
        `;
  }
}
customElements.define('search-bar', SearchBar);
