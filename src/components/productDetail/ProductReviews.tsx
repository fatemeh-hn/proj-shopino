import BackgroundLetterAvatars from "./Avatar";
import { Box, Rating } from "@mui/material";
import { Product } from "../../utilities/types/productInterface";

interface ProductInfoProps {
  product: Product;
}

function ProductReviews({ product }: Readonly<ProductInfoProps>) {
  return (
    <div className="mx-3 mt-6 rounded-2xl border border-gray-200 bg-white lg:mx-4 dark:border-gray-700 dark:bg-gray-900">
      <h1 className="m-3 p-3 text-lg font-bold text-gray-900 sm:m-4 sm:p-4 sm:text-xl dark:text-white">
        Customer Reviews
      </h1>

      <div className="m-3 sm:m-5 lg:m-7">
        {product.reviews?.map((review) => (
          <div
            key={review.reviewerEmail}
            className="
              mb-4
              flex
              gap-3
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-3
              sm:gap-4
              sm:p-4
              dark:border-gray-700
              dark:bg-gray-800
            "
          >
            {/* Avatar */}
            <div className="shrink-0">
              <BackgroundLetterAvatars name={review.reviewerName} />
            </div>

            {/* Review Information */}
            <div className="min-w-0">
              <p className="mb-2 font-bold text-gray-900 dark:text-white">
                {review.reviewerName}
              </p>

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
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
                  sx={{
                    color: "#facc15",

                    "@media (prefers-color-scheme: dark)": {
                      color: "#facc15",
                    },
                  }}
                />
              </Box>

              {/* Comment */}
              <p className="mt-2 break-words text-gray-800 dark:text-gray-200">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductReviews;
