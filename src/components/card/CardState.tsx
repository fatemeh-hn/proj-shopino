import Card from "./Card";
import { useEffect, useMemo, useRef, useState } from "react";
import { GET_PRODUCT } from "../../api/cardProducts";
import { Product } from "../../utilities/types/productInterface";
import { showSnackbar } from "../../api/snackbarNotifications";
import Filters from "./Filters";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Box, CircularProgress, Skeleton } from "@mui/material";
import SkeletonBox from "./Skeleton";

interface CardStateProps {
  search: string;
}

function CardState({ search }: Readonly<CardStateProps>) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedAvailability, setSelectedAvailability] =
    useState<string>("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);

  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: GET_PRODUCT,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;

      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    // staleTime: 1 * 60 * 1000,
  });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.1,
      },
    );

    const element = loadMoreRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const products = data?.pages.flatMap((page) => page.products) ?? [];

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

  // if (isPending) {
  //   return (
  //     <div className="grid grid-cols-3 gap-4">
  //       <Skeleton className="h-[429.4px] w-64 rounded-xl "/>
  //     </div>
  //   );
  // }

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

          <div className="grid grid-cols-3 gap-4">
            {products.length === 0 && isPending ? (
                <SkeletonBox className="!h-[429px] w-64 rounded-xl " count={9} />
            ) : products.length === 0 ? (
              <p className="text-gray-900 dark:text-gray-100">
                No product added
              </p>
            ) : (
              filteredData.map((product) => (
                <Card key={product.id} product={product} />
              ))
            )}
          </div>
          <div ref={loadMoreRef} className="h-10" />
          {isFetchingNextPage && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress aria-label="Loading…" />
            </Box>
          )}
        </div>
      </div>
    </section>
  );
}

export default CardState;
