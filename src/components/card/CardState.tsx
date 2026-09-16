import Card from "./Card";
import { useEffect, useMemo, useState } from "react";
import getProduct from "../../api/card";
import { Product } from "../../utilities/types/productTypes";
import { Snackbar } from "@mui/material";
import Filters from "./Filters";


interface CardStateProps {
  search: string;
}

function CardState({ search }: Readonly<CardStateProps>) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  

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

  const categories = [...new Set(products?.map((product) => product.category))];
  const availability = [
    ...new Set(products?.map((product) => product.availabilityStatus)),
  ];

  const filteredData = useMemo(() => {
    return products?.filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        (selectedAvailability === "All" ||
          product.availabilityStatus === selectedAvailability) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.title.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }, [products, selectedCategory, selectedAvailability, priceRange, search]);

  const [minPrice, maxPrice] = useMemo(() => {
    if (products.length === 0) return [0, 0];

    return products.reduce<[number, number]>(
      ([min, max], product) => [
        Math.min(min, product.price),
        Math.max(max, product.price),
      ],
      [Infinity, -Infinity],
    );
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      setPriceRange([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice, products.length]);

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
        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          availability={availability}
          selectedAvailability={selectedAvailability}
          onAvailabilityChange={setSelectedAvailability}
          minPrice={minPrice}
          maxPrice={maxPrice}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
        />

        <div className="flex-1">
          <div className="mb-5 flex items-center gap-2">
            <h2 className="text-xl font-bold text-black">All Products</h2>

            <p className="text-sm text-gray-400">{products.length} items</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {products?.length === 0 ? (
              <p>No product added</p>
            ) : (
              filteredData.map((product) => (
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
