import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";

let productCatalogSuccess: null | { id: number; name: string; price: number }[] = null;

const handlePseudoAPICallsAndDisplayData = (): void => {
  fetchProductCatalog()
    .then((productCatalog: { id: number; name: string; price: number }[]) => {
      console.log(`Product Catalog: ${JSON.stringify(productCatalog)}`);
      productCatalogSuccess = productCatalog;
    })
    .catch((error) => {
      console.error(error.message);
    })

  if (productCatalogSuccess) {
    for (let i = 0; i < productCatalogSuccess.length; i++) {
      fetchProductReviews(productCatalogSuccess[i].id)
        .then((productReviews: { userId: number, userReview: string, userRating: number }[]) => {
          console.log(`Product Review: ${JSON.stringify(productReviews)}`);
        })
        .catch((error) => {
          console.error(error.message);
        })
    } // for (let i = 0; i < productCatalogSuccess . . .)
  } // if (productCatalogSuccess)

  fetchSalesReport()
    .then((salesReport: { totalSales: number, unitsSold: number, averagePrice: number }) => {
      console.log(`Sales Report: ${JSON.stringify(salesReport)}`);
    })
    .catch((error) => {
      console.error(error.message);
    })
    // pop on a 'finally' indicating all API calls requested.  Later pop Promise.any on the multiples.


}

/** 

Part 3: Build the Main Application Logic
Create an index.ts file to contain the main logic of your application.

Write a Function to Handle API Calls and Display Data:

Implement Error Handling Using Promises:

Part 5: Optional Challenge
Create a Retry Mechanism:

Write a utility function retryPromise that accepts an async function, the number of retry attempts, and the delay between attempts.
Hint: Use setTimeout to delay the next attempt.
Hint: You will need to utilize recursion to implement this function. Not sure what recursion is, or don’t quite remember? This is an opportunity to practice your research abilities or review!
Use this function to retry API calls that fail initially.
Implement retryPromise with API Calls to retry up to three times for each API call before giving up.
*/

const retryPromise = (asyncFunction: Function, retryAttempts: number, millisecondsDelay: number) => {

}