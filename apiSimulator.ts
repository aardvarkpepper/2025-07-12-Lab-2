import { productCatalog, productReviews } from './apiData.ts';
import { NetworkError, DataError } from "./customErrors.ts";

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    console.log('fPC trigger');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                for (let i = 0; i < productCatalog.length; i++) {
                    productCatalog.forEach((value, key) => {
                        if (!value) {
                            reject(new DataError("One or more missing fields in API response for fetchProductCatalog."))
                        }
                    });
                }
                resolve(productCatalog);
            } else {
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};

// Reviews are stored in a Map (ideally might be an array, but we don't have a spec on that - I think Javascript arrays don't get allocated memory like arrays in other languages, so empty references in an array shouldn't be an issue.  At any rate, allowing Map means the key can be changed to be an object or such, contrasing to object keys that are only strings/Symbols (including numbers coerced into strings).  As I don't want to have duplicate userIds, maybe I want to have Maps on that too.  But then, maybe I'd want a unique reviewId as well, and set things up in SQL or something.  Nah.  Just keep it simple, no Map reference (at least on userId), maybe one user can make multiple reviews.  Actually that's terrible, but eh, I'll leave it.
export const fetchProductReviews = (productId: number): Promise<{ userId: number, userReview: string, userRating: number }[]> => {
    console.log('fPR trigger');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                const productReview = productReviews.get(productId);
                for (let i = 0; i < (productReview as { userId: number, userReview: string, userRating: number }[]).length; i++) {
                    Object.keys((productReview as { userId: number, userReview: string, userRating: number }[])[i]).forEach((value, key) => {
                        if (!value) {
                            reject(new DataError("One or more missing fields in API response for fetchProductReviews."))
                        }
                    });
                }
                resolve(productReviews.get(productId) as { userId: number, userReview: string, userRating: number }[]);
            } else {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
};

// Should iterate through each item in fetchProductCatalog.
// But that doesn't include quantity or . . . I suppose averagePrice isn't the average price of a single item considering discounts and such.  Maybe it's just an average price of all items sold no matter what type.  Fine.  Still need to have something to contain quantities sold data, call it fetchTotalSales maybe.  This whole object thing is . . . maybe replace with types?  Maybe later.
export const fetchSalesReport = (): Promise<{ totalSales: number, unitsSold: number, averagePrice: number }> => {
    console.log('fSR trigger');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                for (let i = 0; i < productCatalog.length; i++) {
                    productCatalog.forEach((value, key) => {
                        if (!value) {
                            reject(new DataError("One or more missing fields in API response for fetchSalesReport."))
                        }
                    });
                }
                resolve(
                    { totalSales: 6400, unitsSold: 12, averagePrice: 533.33 },
                );
            } else {
                reject(new NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
};