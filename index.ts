import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";

// let productCatalogSuccess: null | { id: number; name: string; price: number }[] = null;

const handlePseudoAPICallsAndDisplayData = (): void => {
  console.log('=====');
  fetchProductCatalog()
    .then((productCatalog: { id: number; name: string; price: number }[]) => {
      console.log(`Product Catalog: ${JSON.stringify(productCatalog)}`);
      console.log('=====');
      // productCatalogSuccess = productCatalog;
      // console.log(`main call; productCatalogSuccess set to ${JSON.stringify(productCatalog)} `);
      for (let i = 0; i < productCatalog.length; i++) {
        fetchProductReviews(productCatalog[i].id)
          .then((productReviews: { userId: number, userReview: string, userRating: number }[]) => {
            console.log(`Product Review: ${JSON.stringify(productReviews)}`);
            console.log('-----');
          })
          .catch((error) => {
            console.error(error.message);
            console.log('=====');
          })
      } // for (let i = 0; i < productCatalog.length . . .
    })
    .catch((error) => {
      console.error(error.message);
      console.log('=====');
    })


  fetchSalesReport()
    .then((salesReport: { totalSales: number, unitsSold: number, averagePrice: number }) => {
      console.log(`Sales Report: ${JSON.stringify(salesReport)}`);
      console.log('======');
    })
    .catch((error) => {
      console.error(error.message);
      console.log('=====');
    })
    .finally(() => {
      console.log('All API calls have been attempted.');
    })
}
handlePseudoAPICallsAndDisplayData();

/** 

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