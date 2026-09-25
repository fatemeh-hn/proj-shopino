import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import getProductDetails from "../api/cardDetails";
import { Product } from "../utilities/types/productTypes";
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
      <Header showSearch={false} showLogin={false} showTheme={false} />

      {/* Breadcrumb */}
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

      {/* Product Info */}
      <ProductInfo product={product} />

      {/* Customer Reviews */}
      <ProductReviews product={product} />
    </div>
  );
}

export default ProductDetails;
