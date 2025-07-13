export const productCatalog =
  [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 800 },
  ];

export const productReviews = new Map([
  [1, [
    { userId: 111, userReview: `Why do cats like laptops?  I don't know, and I'm a cat.`, userRating: 5 },
    { userId: 222, userReview: 'As a Laplander, I like this laptop', userRating: 4 },
  ]],
  [2, [
    { userId: 333, userReview: 'Headphones work.', userRating: 3 },
    { userId: 444, userReview: 'The sound quality of these headphones is fantastic.', userRating: 5 },
  ]]
]);