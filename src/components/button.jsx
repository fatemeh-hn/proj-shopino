import { ShoppingCart } from "lucide-react";

export function Button() {
  return (
    <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
      <ShoppingCart size={20} />
      <span>Add to Cart</span>
    </button>
  );
}
