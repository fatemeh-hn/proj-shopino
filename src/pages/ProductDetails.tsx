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
    <div>
      {/* Breadcrumb */}
      <div className="px-7 pt-5  ">
        <Breadcrumbs
          separator={<span className="text-3xl">›</span>}
          aria-label="breadcrumb"
        >
          <Link to="/" className="text-gray-700 hover:text-black font-bold">
            Home
          </Link>

          <Typography
            sx={{
              color: "#6a7282",
              fontWeight: 700,
            }}
          >
            {product.title}
          </Typography>
        </Breadcrumbs>
      </div>
      
      <div className="flex">
        <div className="w-[30%] h-[30%] bg-gray-100 m-5 rounded-2xl border border-gray-200">
          <img src={product.images[0]} alt={product.title} />
        </div>

        <div className="m-5 w-[60%]">
          <p className="mb-3 text-gray-500">{product.brand || "No brand"}</p>
          <h1 className="font-bold mb-3">{product.title || "No title"}</h1>
          <div className="mb-3 flex gap-1 font-bold">
            <StarIcon sx={{ color: "#fbbf24" }} />
            <p>{product.rating || "No rating"}</p>
          </div>

          <p className="mb-3 font-bold text-2xl">
            ${product.price || "No price"}
          </p>

          <p className="mb-3 text-gray-500">
            {product.description || "No description"}
          </p>

          <div className="mt-6 grid grid-cols-3 border-b border-gray-200 p-4">
            {/* Brand */}
            <div className="flex gap-4 border-r border-gray-200 p-4">
              <Handbag />
              <div>
                <p className="text-gray-500">Brand</p>
                <p>{product.brand || "No brand"}</p>
              </div>
            </div>

            {/* Category */}
            <div className="flex gap-4 border-r border-gray-200 p-4">
              <ShoppingBag />
              <div>
                <p className="text-gray-500">Category</p>
                <p>{product.category || "No category"}</p>
              </div>
            </div>

            {/* SKU */}
            <div className="flex gap-4 p-4">
              <Barcode />
              <div>
                <p className="text-gray-500">Sku</p>
                <p>{product.sku || "No sku"}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-4 border-r border-gray-200 p-4">
              <Tag />
              <div>
                <p className="text-gray-500">Tags</p>
                <div className="flex gap-2">
                  {product.tags?.length > 0 ? (
                    product.tags.map((tag) => <Chip key={tag} label={tag} />)
                  ) : (
                    <p>No tags</p>
                  )}
                </div>
              </div>
            </div>

            {/* Weight */}
            <div className="flex gap-4 border-r border-gray-200 p-4">
              <Weight />
              <div>
                <p className="text-gray-500">Weight</p>
                <p>{product.weight || "No weight"}</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex gap-4 p-4">
              <Package />
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
          <div className="flex gap-10">
            {/* Warranty */}
            <div className="flex gap-4 p-4">
              <ShieldCheck className="text-gray-500" />
              <div>
                <p className="text-gray-500">
                  {product.warrantyInformation || "No warrantyInformation"}
                </p>
              </div>
            </div>

            {/* Shipping */}
            <div className="flex gap-4 p-4">
              <Truck className="text-gray-500" />
              <div>
                <p className="text-gray-500">
                  {product.shippingInformation || "No shippingInformation"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-7">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                justifyContent: "center",
                width: "200px",
              }}
            >
              <NumberSpinner size="small" defaultValue={1} />
            </Box>

            <div className="w-80 mt-1">
              <Button />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border border-gray-200 mt-6 mx-4 rounded-2xl">
          <h1 className="m-4 p-4 font-bold">Customer Reviews</h1>
          <div className="m-7">
            {product.reviews?.map((review) => (
              <div
                key={review.reviewerEmail}
                className="flex gap-4 border border-gray-200 rounded-2xl p-4 mb-4"
              >
                <BackgroundLetterAvatars name={review.reviewerName} />

                <div className="">
                  <p className="font-bold mb-2">{review.reviewerName}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>

                  <Box sx={{ "& > legend": { mt: 2 } }}>
                    <Rating name="read-only" value={review.rating} readOnly />
                  </Box>
                  <p className="mt-2">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
