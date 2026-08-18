import { Button } from "./button";
export function Card() {
  return (
    <div className="w-80 m-4 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-md">
      <div className="h-64 m-4 flex items-center justify-center">
        <img
          src="/src/assets/watch.webp"
          alt="watch-pic"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900">Minimal Watch</h2>

        <h3 className="mt-2 text-2xl font-bold text-gray-900">$129.00</h3>

        <p className="mt-3 font-medium text-green-500">In Stock</p>

        <Button />
      </div>
    </div>
  );
}
