import { Heart } from "lucide-react";
import { Button } from "./Button";


export function Card() {
  return (
    <div className="w-64 overflow-hidden rounded-xl border border-gray-200 bg-white">
      
      
      <div className="relative flex h-52 items-center justify-center bg-gray-100 p-4">

        <img
          src="src/assets/watch.webp"
          alt="Minimal Watch"
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

      
      <div className="p-4">
        <h2 className="text-base font-bold text-gray-900">
          Minimal Watch
        </h2>

        <h3 className="mt-1 text-base font-bold text-gray-900">
          $129.00
        </h3>

        <p className="mt-1 text-base font-bold text-green-500">
          In Stock
        </p>

        <div className="mt-3">
          <Button />
        </div>
      </div>

    </div>
  );
}

export default Card;