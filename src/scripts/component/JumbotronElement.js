class JumbotronElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="jumbotron" class="jumbotron">
        <div class="content">
          <h1>Selamat Datang <br class="brH1"/> di Hunger Apps</h1>
          <p>
            Jelajahi pilihan restoran terbaik dari berbagai daerah yang<br class="break" />
             menawarkan hidangan khas dan suasana yang menarik untuk Anda nikmati!
          </p>
          <button id="view-resto" class="button">Lihat Restoran</button>
        </div>
      </section>
    `;
  }
}

customElements.define('jumbotron-element', JumbotronElement);
