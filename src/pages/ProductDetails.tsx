import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import getProductDetails from "../api/cardDetails";
import { Product } from "../utilities/types/productTypes";
import NumberSpinner from "../components/card/NumberSpinner";

import {
  Barcode,
  Handbag,
  Package,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Truck,
  Weight,
} from "lucide-react";

import { Box, Breadcrumbs, Chip, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import { Button } from "../components/card/Button";
import BackgroundLetterAvatars from "../components/card/Avatar";
import Header from "../components/card/Header";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) {
          throw new Error("Product ID not found");
        }

        const data = await getProductDetails(id);

        setProduct(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong about api call for productDetails");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading... please wait</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="w-full">
      <Header
  showSearch={false}
  showLogin={false}
  showTheme={false}
/>
      

      <div className="px-3 sm:px-5 lg:px-7 pt-4 lg:pt-5 overflow-hidden">
        <Breadcrumbs
          separator={<span className="text-xl sm:text-2xl">›</span>}
          aria-label="breadcrumb"
        >
          <Link
            to="/"
            className="text-gray-700 hover:text-black font-bold shrink-0"
          >
            Home
          </Link>

          <Typography
            sx={{
              color: "#6a7282",
              fontWeight: 700,
            }}
            className="truncate"
          >
            {product.title}
          </Typography>
        </Breadcrumbs>
      </div>

     

      <div className="flex flex-col lg:flex-row w-full">
        

        <div
          className="
            w-auto
            h-[350px]
            sm:h-[400px]
            lg:w-[30%]
            lg:h-[450px]
            bg-gray-100
            m-3
            lg:m-5
            rounded-2xl
            border
            border-gray-200
            overflow-hidden
          "
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

       

        <div className="m-3 lg:m-5 flex-1 min-w-0">
          {/* Brand */}

          <p className="mb-3 text-gray-500">
            {product.brand || "No brand"}
          </p>

          {/* Title */}

          <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-3">
            {product.title || "No title"}
          </h1>

          {/* Rating */}

          <div className="mb-3 flex items-center gap-1 font-bold">
            <StarIcon sx={{ color: "#fbbf24" }} />

            <p>{product.rating || "No rating"}</p>
          </div>

          {/* Price */}

          <div className="mb-3 font-bold text-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span>
                ${product.price || "No price"}
              </span>

              <Chip
                sx={{
                  color: "#fb2c36",
                  background: "#F5E4E4",
                }}
                label={
                  product.discountPercentage
                    ? `${product.discountPercentage}% OFF`
                    : "No discount"
                }
              />
            </div>
          </div>

          {/* Description */}

          <p className="mb-3 text-gray-500 leading-6">
            {product.description || "No description"}
          </p>

          

          <div
            className="
              mt-6
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              border-b
              border-gray-200
              p-2
              lg:p-4
            "
          >
            {/* Brand */}

            <div
              className="
                flex
                gap-4
                border-b
                lg:border-b-0
                lg:border-r
                border-gray-200
                p-4
              "
            >
              <Handbag className="shrink-0" />

              <div className="min-w-0">
                <p className="text-gray-500">Brand</p>

                <p className="break-words">
                  {product.brand || "No brand"}
                </p>
              </div>
            </div>

            {/* Category */}

            <div
              className="
                flex
                gap-4
                border-b
                lg:border-b-0
                lg:border-r
                border-gray-200
                p-4
              "
            >
              <ShoppingBag className="shrink-0" />

              <div className="min-w-0">
                <p className="text-gray-500">Category</p>

                <p className="break-words">
                  {product.category || "No category"}
                </p>
              </div>
            </div>

            {/* SKU */}

            <div
              className="
                flex
                gap-4
                border-b
                lg:border-b-0
                border-gray-200
                p-4
              "
            >
              <Barcode className="shrink-0" />

              <div className="min-w-0">
                <p className="text-gray-500">SKU</p>

                <p className="break-words">
                  {product.sku || "No sku"}
                </p>
              </div>
            </div>

            {/* Tags */}

            <div
              className="
                flex
                gap-4
                border-b
                lg:border-b-0
                lg:border-r
                border-gray-200
                p-4
              "
            >
              <Tag className="shrink-0" />

              <div className="min-w-0">
                <p className="text-gray-500">Tags</p>

                <div className="flex gap-2 flex-wrap">
                  {product.tags?.length > 0 ? (
                    product.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                      />
                    ))
                  ) : (
                    <p>No tags</p>
                  )}
                </div>
              </div>
            </div>

            {/* Weight */}

            <div
              className="
                flex
                gap-4
                border-b
                lg:border-b-0
                lg:border-r
                border-gray-200
                p-4
              "
            >
              <Weight className="shrink-0" />

              <div>
                <p className="text-gray-500">Weight</p>

                <p>
                  {product.weight || "No weight"}
                </p>
              </div>
            </div>

            {/* Availability */}

            <div className="flex gap-4 p-4">
              <Package className="shrink-0" />

              <div>
                <p className="text-gray-500">
                  Availability
                </p>

                <p
                  className={
                    product.availabilityStatus === "Low Stock"
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {product.availabilityStatus ||
                    "No availability"}
                </p>
              </div>
            </div>
          </div>

          

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              lg:gap-10
              mt-2
            "
          >
            {/* Warranty */}

            <div className="flex gap-4 p-4">
              <ShieldCheck className="text-gray-500 shrink-0" />

              <div>
                <p className="text-gray-500">
                  {product.warrantyInformation ||
                    "No warrantyInformation"}
                </p>
              </div>
            </div>

            {/* Shipping */}

            <div className="flex gap-4 p-4">
              <Truck className="text-gray-500 shrink-0" />

              <div>
                <p className="text-gray-500">
                  {product.shippingInformation ||
                    "No shippingInformation"}
                </p>
              </div>
            </div>
          </div>

         

         <div className="flex flex-row gap-3 mt-2">
  {/* Number Spinner */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: {
        xs: "120px",
        sm: "200px",
      },
    }}
  >
    <NumberSpinner
      size="small"
      defaultValue={1}
    />
  </Box>

  {/* Add To Cart */}
  <div className="flex-1 sm:w-80 mt-1">
    <Button />
  </div>
</div>
        </div>
      </div>

     

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
                <BackgroundLetterAvatars
                  name={review.reviewerName}
                />
              </div>

              {/* Review Information */}

              <div className="min-w-0">
                <p className="font-bold mb-2">
                  {review.reviewerName}
                </p>

                <p className="text-sm text-gray-500 mb-2">
                  {new Date(
                    review.date
                  ).toLocaleDateString("en-US", {
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

                <p className="mt-2 break-words">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;