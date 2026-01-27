import baseRouter from "../utils/baseRouter.js";
import getAllReviews from "../services/reviews/getAllReviews.js";
import getReviewById from "../services/reviews/getReviewById.js";
import createReview from "../services/reviews/createReview.js";
import updateReviewById from "../services/reviews/updateReviewById.js";
import deleteReviewById from "../services/reviews/deleteReviewById.js";

const
    model = {
        userId: 'string'
        , propertyId: 'string'
        , rating: 'int'
        , comment: 'string'
    }
    , router = baseRouter('Review', model, getAllReviews, getReviewById, createReview, updateReviewById, deleteReviewById);

export default router;


