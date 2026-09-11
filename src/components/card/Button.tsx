import { ShoppingCart } from "lucide-react";

export function Button() {
  return (
    <button
      type="button"
      className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 font-medium text-white transition hover:bg-blue-600"
    >
      <ShoppingCart size={20} />
      <span>Add to Cart</span>
    </button>
  );
}
