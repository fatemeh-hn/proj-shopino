import { Product } from "../../utilities/types/productInterface";
import { Trash } from "lucide-react";
import Typography from "@mui/material/Typography";
import NumberSpinner from "../productDetail/NumberSpinner";
import { useShoppingCart } from "../../store/shoppingCartStore";

interface CartItemsProps {
  item: Product;
}

function CartItems({ item }: Readonly<CartItemsProps>) {
  const deleteCartItem = useShoppingCart((state)=>(state.removeFromCart)); 
  return (
    <div className="flex w-full items-center gap-3 px-1 py-1">
      
      <img
        src={item.images[0]}
        alt={item.title}
        className="h-25 w-25 shrink-0 rounded-md object-cover bg-mauve-200"
      />

      
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Typography
          variant="body1"
          className="truncate font-medium text-gray-900"
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          className="font-medium text-gray-700"
        >
          ${item.price.toFixed(2)}
        </Typography>

        
         <div className="mt-2 w-30" onClick={(e) => e.stopPropagation()}>
          <NumberSpinner
            defaultValue={1}
            min={1}
            size="small"
          />
        </div>
      
      </div>

      
      <button
        type="button"
        className="shrink-0 text-gray-400 transition hover:text-red-500"
        onClick={() => deleteCartItem(item.id)}
      >
        <Trash className="h-5 w-5" />
      </button>
    </div>
  );
}

export default CartItems;