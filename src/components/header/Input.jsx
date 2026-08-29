import { Search } from "lucide-react";

function Input() {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="text"
        placeholder="Search for products..."
        className="
          w-full
          rounded-md
          border
          border-gray-300
          py-3
          pl-12
          pr-4
          outline-none
        "
      />
    </div>
  );
}

export default Input;