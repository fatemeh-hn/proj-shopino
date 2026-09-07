import Card from "./Card";
import { useEffect, useState } from "react";
import getProduct from "../../api/card";
import { Snackbar } from "@mui/material";

function CardState() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct();
        setProduct(data.products);
      } catch (err) {
        setError(err.message);
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
    <section className="mx-auto w-full max-w-300 p-5">
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

      <div className="flex gap-6">
        {/* Filters */}
        <aside className="w-60 shrink-0">
          <h3 className="mb-4 font-bold">Filters</h3>

          <label className="flex gap-2">
            <input type="checkbox" />
            Watches
          </label>

          <label className="mt-2 flex gap-2">
            <input type="checkbox" />
            Shoes
          </label>
        </aside>

        <div className="flex-1">
          <div className="mb-5 flex items-center gap-2">
            <h2 className="text-xl font-bold text-black">All Products</h2>

            <p className="text-sm text-gray-400">{product.length} items</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {product?.length === 0 ? (
              <p>No product added</p>
            ) : (
              product.map((product) => (
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
