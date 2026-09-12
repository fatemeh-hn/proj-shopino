import Card from "./Card";
import { useEffect, useState } from "react";
import getProduct from "../../api/card";
import {Product} from "../../utilities/types/productTypes"
import { Snackbar } from "@mui/material";
import Filters from "./Filters";


function CardState() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct();
        setProducts(data.products);
      } catch (err) {
        if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <p className="text-center">Loading... .please wait</p>;
  }
  return (
    <section className="mx-auto w-full max-w-337.5 p-5">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={error}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#155dFc",
          },
        }}
      />

      <div className="flex gap-8">
        
        <Filters/>

        <div className="flex-1">
          <div className="mb-5 flex items-center gap-2">
            <h2 className="text-xl font-bold text-black">All Products</h2>

            <p className="text-sm text-gray-400">{products.length} items</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {products?.length === 0 ? (
              <p>No product added</p>
            ) : (
              products.map((product) => (
                <Card key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardState;
