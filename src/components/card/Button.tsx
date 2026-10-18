import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "../../store/shoppingCartStore";
import { Product } from "../../utilities/types/productInterface";
import { showSnackbar } from "../../api/snackbarNotifications";

interface ButtonProps {
  product: Product;
}

export function Button({ product }: Readonly<ButtonProps>) {
  const addToShoppingCart = useShoppingCart((state) => state.addToCart);

  const onAddClick = () => {
    addToShoppingCart(product);
    showSnackbar("Product added to cart successfully", "success");
  };

  return (
    <button
      onClick={onAddClick}
      type="button"
      className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 font-medium text-white transition hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-700"
    >
      <ShoppingCart size={20} />
      <span>Add to Cart</span>
    </button>
  );
}