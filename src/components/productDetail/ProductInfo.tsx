import { Box, Chip } from "@mui/material";
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
import StarIcon from "@mui/icons-material/Star";
import { Product } from "../../utilities/types/productInterface";
import { Button } from "../card/Button";
import NumberSpinner from "./NumberSpinner";

interface ProductInfoProps {
  product: Product;
}

function ProductInfo({ product }: Readonly<ProductInfoProps>) {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      {/* Product Image */}
      <div
        className="
          m-3
          h-[350px]
          w-auto
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-gray-100
          sm:h-[400px]
          lg:m-5
          lg:h-[450px]
          lg:w-[30%]
          dark:border-gray-700
          dark:bg-gray-800
        "
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="m-3 min-w-0 flex-1 lg:m-5">
        {/* Brand */}
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          {product.brand || "No brand"}
        </p>

        {/* Title */}
        <h1 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl dark:text-white">
          {product.title || "No title"}
        </h1>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1 font-bold text-gray-900 dark:text-white">
          <StarIcon sx={{ color: "#fbbf24" }} />

          <p>{product.rating || "No rating"}</p>
        </div>

        {/* Price */}
        <div className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          <div className="flex flex-wrap items-center gap-2">
            <span>${product.price || "No price"}</span>

            <Chip
              sx={{
                color: "#fb2c36",
                backgroundColor: "#F5E4E4",

                "@media (prefers-color-scheme: dark)": {
                  color: "#fca5a5",
                  backgroundColor: "#3f2024",
                },
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
        <p className="mb-3 leading-6 text-gray-500 dark:text-gray-400">
          {product.description || "No description"}
        </p>

        {/* Product Specifications */}
        <div
          className="
            mt-6
            grid
            grid-cols-1
            border-b
            border-gray-200
            p-2
            sm:grid-cols-2
            lg:grid-cols-3
            lg:p-4
            dark:border-gray-700
          "
        >
          {/* Brand */}
          <div
            className="
              flex
              gap-4
              border-b
              border-gray-200
              p-4
              lg:border-b-0
              lg:border-r
              dark:border-gray-700
            "
          >
            <Handbag className="shrink-0 text-gray-700 dark:text-gray-200" />

            <div className="min-w-0">
              <p className="text-gray-500 dark:text-gray-400">Brand</p>

              <p className="break-words text-gray-900 dark:text-gray-100">
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
              border-gray-200
              p-4
              lg:border-b-0
              lg:border-r
              dark:border-gray-700
            "
          >
            <ShoppingBag className="shrink-0 text-gray-700 dark:text-gray-200" />

            <div className="min-w-0">
              <p className="text-gray-500 dark:text-gray-400">Category</p>

              <p className="break-words text-gray-900 dark:text-gray-100">
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
              border-gray-200
              p-4
              lg:border-b-0
              dark:border-gray-700
            "
          >
            <Barcode className="shrink-0 text-gray-700 dark:text-gray-200" />

            <div className="min-w-0">
              <p className="text-gray-500 dark:text-gray-400">SKU</p>

              <p className="break-words text-gray-900 dark:text-gray-100">
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
              border-gray-200
              p-4
              lg:border-b-0
              lg:border-r
              dark:border-gray-700
            "
          >
            <Tag className="shrink-0 text-gray-700 dark:text-gray-200" />

            <div className="min-w-0">
              <p className="text-gray-500 dark:text-gray-400">Tags</p>

              <div className="flex flex-wrap gap-2">
                {product.tags?.length > 0 ? (
                  product.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        color: "#374151",
                        backgroundColor: "#f3f4f6",

                        "@media (prefers-color-scheme: dark)": {
                          color: "#e5e7eb",
                          backgroundColor: "#374151",
                        },
                      }}
                    />
                  ))
                ) : (
                  <p className="text-gray-900 dark:text-gray-100">No tags</p>
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
              border-gray-200
              p-4
              lg:border-b-0
              lg:border-r
              dark:border-gray-700
            "
          >
            <Weight className="shrink-0 text-gray-700 dark:text-gray-200" />

            <div>
              <p className="text-gray-500 dark:text-gray-400">Weight</p>

              <p className="text-gray-900 dark:text-gray-100">
                {product.weight || "No weight"}
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="flex gap-4 p-4">
            <Package className="shrink-0 text-gray-700 dark:text-gray-200" />

            <div>
              <p className="text-gray-500 dark:text-gray-400">Availability</p>

              <p
                className={
                  product.availabilityStatus === "Low Stock"
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {product.availabilityStatus || "No availability"}
              </p>
            </div>
          </div>
        </div>

        {/* Warranty + Shipping */}
        <div
          className="
            mt-2
            flex
            flex-col
            gap-4
            sm:flex-row
            lg:gap-10
          "
        >
          {/* Warranty */}
          <div className="flex gap-4 p-4">
            <ShieldCheck className="shrink-0 text-gray-500 dark:text-gray-400" />

            <div>
              <p className="text-gray-500 dark:text-gray-400">
                {product.warrantyInformation || "No warrantyInformation"}
              </p>
            </div>
          </div>

          {/* Shipping */}
          <div className="flex gap-4 p-4">
            <Truck className="shrink-0 text-gray-500 dark:text-gray-400" />

            <div>
              <p className="text-gray-500 dark:text-gray-400">
                {product.shippingInformation || "No shippingInformation"}
              </p>
            </div>
          </div>
        </div>

        {/* Quantity + Add To Cart */}
        <div className="flex flex-row items-center gap-3 px-3 lg:px-5">
          {/* Number Spinner */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: {
                xs: "180px",
                sm: "200px",
              },
            }}
          >
            <NumberSpinner size="small" defaultValue={1} />
          </Box>

          {/* Add To Cart */}
          <div className="w-80">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
