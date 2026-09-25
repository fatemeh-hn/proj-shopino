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
import { Product } from "../../utilities/types/productTypes";
import { Button } from "../card/Button";
import NumberSpinner from "./NumberSpinner";

interface ProductInfoProps {
  product: Product;
}
function ProductInfo({ product }: Readonly<ProductInfoProps>) {
  return (
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

        <p className="mb-3 text-gray-500">{product.brand || "No brand"}</p>

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
            <span>${product.price || "No price"}</span>

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

              <p className="break-words">{product.brand || "No brand"}</p>
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

              <p className="break-words">{product.category || "No category"}</p>
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

              <p className="break-words">{product.sku || "No sku"}</p>
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
                    <Chip key={tag} label={tag} size="small" />
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

              <p>{product.weight || "No weight"}</p>
            </div>
          </div>

          {/* Availability */}

          <div className="flex gap-4 p-4">
            <Package className="shrink-0" />

            <div>
              <p className="text-gray-500">Availability</p>

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
                {product.warrantyInformation || "No warrantyInformation"}
              </p>
            </div>
          </div>

          {/* Shipping */}

          <div className="flex gap-4 p-4">
            <Truck className="text-gray-500 shrink-0" />

            <div>
              <p className="text-gray-500">
                {product.shippingInformation || "No shippingInformation"}
              </p>
            </div>
          </div>
        </div>

        {/* Quantity + Add To Cart */}
        <div className="flex flex-row items-center gap-3  px-3 lg:px-5">
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
