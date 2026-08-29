import { ShoppingCart } from "lucide-react";

function Shop() {
  return (
    <button
      type="button"
      className="relative p-2"
    >
      <ShoppingCart className="h-6 w-6" />

      <span
        className="
          absolute
          -right-1
          -top-1
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-xs
          text-white
        "
      >
        3
      </span>
    </button>
  );
}

export default Shop;