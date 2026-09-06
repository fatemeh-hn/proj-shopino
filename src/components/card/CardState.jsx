import Card from "./Card";
import { useEffect, useState } from "react";
import getProduct from "../../api/card";

function CardState() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct();
      setProduct(data.products);
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <section className="mx-auto w-full max-w-300 p-5">
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
            {product.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default CardState;
