import React from "react";
import BackgroundLetterAvatars from "./Avatar";
import { Box, Rating } from "@mui/material";
import { Product } from "../../utilities/types/productInterface";

interface ProductInfoProps {
  product: Product;
}

function ProductReviews({ product }: Readonly<ProductInfoProps>) {
  return (
    <div className="border border-gray-200 mt-6 mx-3 lg:mx-4 rounded-2xl">
      <h1 className="m-3 sm:m-4 p-3 sm:p-4 font-bold text-lg sm:text-xl">
        Customer Reviews
      </h1>

      <div className="m-3 sm:m-5 lg:m-7">
        {product.reviews?.map((review) => (
          <div
            key={review.reviewerEmail}
            className="
              flex
              gap-3
              sm:gap-4
              border
              border-gray-200
              rounded-2xl
              p-3
              sm:p-4
              mb-4
            "
          >
            {/* Avatar */}
            <div className="shrink-0">
              <BackgroundLetterAvatars name={review.reviewerName} />
            </div>

            {/* Review Information */}
            <div className="min-w-0">
              <p className="font-bold mb-2">{review.reviewerName}</p>

              <p className="text-sm text-gray-500 mb-2">
                {new Date(review.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              {/* Rating */}
              <Box
                sx={{
                  "& > legend": {
                    mt: 2,
                  },
                }}
              >
                <Rating
                  name="read-only"
                  value={review.rating}
                  readOnly
                  size="small"
                />
              </Box>

              {/* Comment */}
              <p className="mt-2 break-words">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductReviews;
