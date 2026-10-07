import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { GET_PRODUCT_DETAIL } from "../api/cardDetails";
import { Product } from "../utilities/types/productInterface";
import { Breadcrumbs, Typography } from "@mui/material";
import Header from "../components/card/Header";
import ProductInfo from "../components/productDetail/ProductInfo";
import ProductReviews from "../components/productDetail/ProductReviews";

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

        const response = await GET_PRODUCT_DETAIL(id);

        setProduct(response.data);
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

    void fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <p className="text-gray-900 dark:text-white">Loading... please wait</p>
    );
  }

  if (error) {
    return <p className="text-red-600 dark:text-red-400">{error}</p>;
  }

  if (!product) {
    return <p className="text-gray-900 dark:text-white">Product not found</p>;
  }

  return (
    <div className="w-full bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header showSearch={false} showLogin={false} showTheme={false} />

      {/* Breadcrumb */}
      <div className="overflow-hidden px-3 pt-4 sm:px-5 lg:px-7 lg:pt-5">
        <Breadcrumbs
          separator={
            <span className="text-xl text-gray-500 dark:text-gray-400 sm:text-2xl">
              ›
            </span>
          }
          aria-label="breadcrumb"
        >
          <Link
            to="/"
            className="shrink-0 font-bold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Home
          </Link>

          <Typography
            sx={{
              fontWeight: 700,
            }}
            className="truncate text-gray-500 dark:text-gray-400"
          >
            {product.title}
          </Typography>
        </Breadcrumbs>
      </div>

      {/* Product Info */}
      <ProductInfo product={product} />

      {/* Customer Reviews */}
      <ProductReviews product={product} />
    </div>
  );
}

export default ProductDetails;
