import Card from "./Card";
import { useEffect, useState } from "react";
import getProduct from "../../api/card";
import { Snackbar, Slider, Box } from "@mui/material";
import { SlidersHorizontal } from "lucide-react";
import {Product} from "../../utilities/types/productTypes"


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
        {/* Filters */}
        <aside className="w-60 shrink-0 self-start rounded-2xl border border-gray-200 p-1.5">
          <div className="p-3 flex justify-between">
            <h3 className="mb-4 font-bold">Filters</h3>
            <SlidersHorizontal />
          </div>

          <Box sx={{ px: 2 }}>
            <Slider
              getAriaLabel={() => "price range"}
              valueLabelDisplay="auto"
            />
          </Box>
        </aside>

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
