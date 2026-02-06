import baseRouter from "../utils/baseRouter.js";
import getAllReviews from "../services/reviews/getAllReviews.js";
import getReviewById from "../services/reviews/getReviewById.js";
import modelData from "../models/reviewModel.json" with {type: "json"};

const
    model = modelData.model
    , router = baseRouter({
        itemType: 'review'
        , model: model
        , getAllItems: getAllReviews
        , getItemById: getReviewById
    });

export default router;


