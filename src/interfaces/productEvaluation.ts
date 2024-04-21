export interface ProductEvaluation {
  id: number;
  productId: number; // ID of the product being evaluated
  userId: number; // ID of the user who submitted the evaluation
  rating: number; // Rating out of 5 stars
  comment: string; // Optional comment
  // You can add more properties like date, helpful votes, etc. as needed
}
