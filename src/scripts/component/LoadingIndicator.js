class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1000;
      }
      
      .spinner {
        width: 50px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: 
          radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat,
          conic-gradient(#0000 30%, #ffa516);
        -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
        animation: l13 1s infinite linear;
      }

      @keyframes l13 {
        100% { transform: rotate(1turn); }
      }
    </style>

    <div class="loading-container">
      <div class="spinner"></div>
    </div>
    `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
