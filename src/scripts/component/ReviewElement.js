const ReviewElement = (review) => `
    <div class="review_item">
        <h2>${review.name}</h2>
        <h3>${review.date}</h3>
        <p>${review.review}</p>
    </div>
`;

export default ReviewElement;
