class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="bottom">
        <p>Copyright &#169; 2024 - Hunger Apps</p>
      </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
