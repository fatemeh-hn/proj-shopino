import Card from "./Card";
import { useEffect, useMemo, useState } from "react";
import { GET_PRODUCT } from "../../api/cardProducts";
import { Product } from "../../utilities/types/productInterface";
import { showSnackbar } from "../../api/snackbarNotifications";
import Filters from "./Filters";
import { useQuery } from "@tanstack/react-query";

interface CardStateProps {
  search: string;
}

function CardState({ search }: Readonly<CardStateProps>) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedAvailability, setSelectedAvailability] =
    useState<string>("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);

  const { data, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: GET_PRODUCT,
    staleTime: 1 * 60 * 1000,
  });

  const products: Product[] = data?.data?.products ?? [];

  const categories = [...new Set(products.map((product) => product.category))];

  const availability = [
    ...new Set(products.map((product) => product.availabilityStatus)),
  ];

  const filteredData = useMemo(() => {
    return products.filter(
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
    if (isError) {
      showSnackbar("Failed to get products", "error");
    }
  }, [isError]);

  if (isPending) {
    return (
      <p className="text-center text-gray-900 dark:text-gray-100">
        Loading... please wait
      </p>
    );
  }

  return (
    <section className="mx-auto w-full max-w-337.5 bg-white p-5 dark:bg-gray-900">
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
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              All Products
            </h2>

            <p className="text-sm text-gray-400 dark:text-gray-500">
              {products.length} items
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {products.length === 0 ? (
              <p className="text-gray-900 dark:text-gray-100">
                No product added
              </p>
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
