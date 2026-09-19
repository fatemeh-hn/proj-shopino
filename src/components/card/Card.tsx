import { Heart } from "lucide-react";
import { Button } from "./Button";
import {CardProps} from "../../utilities/types/productTypes"
import { Link } from "react-router";


export function Card({ product}:Readonly<CardProps>) {
  const stockColor =
    product.availabilityStatus === "Low Stock"
      ? "text-red-500"
      : "text-green-500";

  return (
    <div className="flex w-64 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
      <Link to={`/product/${product.id}`}>
      <div className="relative flex h-52 items-center justify-center bg-gray-100 p-4">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain"
        />

        <button
          type="button"
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-sm
          "
        >
          <Heart className="h-4 w-4 text-gray-700" />
        </button>
      </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="text-base font-bold text-gray-900">{product.title}</h2>

        <h3 className="mt-1 text-base font-bold text-gray-900">
          ${product.price}
        </h3>

        <p className={`mt-1 text-base font-bold ${stockColor}`}>
          {product.availabilityStatus}
        </p>

        <div className="mt-auto pt-3">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Card;
