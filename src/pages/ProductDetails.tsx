import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getProductDetails from "../api/cardDetails";
import { Product } from "../utilities/types/productTypes";

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
      <div>
        <div>
          <img />
        </div>

        <div>
          <h1>{product.title}</h1>
          
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;