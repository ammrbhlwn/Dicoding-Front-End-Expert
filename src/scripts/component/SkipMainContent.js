class SkipMainContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <a href="#" class="skip-link">Menuju ke konten</a>
        `;
  }
}
customElements.define('skip-main-content', SkipMainContent);
