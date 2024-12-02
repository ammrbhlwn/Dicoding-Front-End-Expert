const pageNotFound = (message) => {
  document.body.innerHTML = `
    <div class="not-found">
        <h1 class="error-title">Ooops!</h1>
        <p class="error-detail">${message}</p>
        <button onclick="location.href='#'">Back to homepage</button>
    </div>
  `;
};

export default pageNotFound;
