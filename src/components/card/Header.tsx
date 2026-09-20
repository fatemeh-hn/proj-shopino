import { Handbag, Search, ShoppingCart } from "lucide-react";
import Theme from "./Theme";
import { useCallback, useState } from "react";
import { Link } from "react-router";

interface Props {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ search, setSearch }: Readonly<Props>) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleThemeChange = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div
        className="
          mx-auto
          grid
          h-20
          max-w-337.5
          grid-cols-[1fr_500px_1fr]
          items-center
          px-6
        "
      >
        <div className="justify-self-start">
          <div className="flex shrink-0 items-center gap-3">
            <Handbag className="h-6 w-6" />

            <p className="text-xl font-bold text-black">Shopio</p>

            <Theme theme={theme} onThemeChange={handleThemeChange} />
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search for products..."
              value={search ?? ""}
              onChange={(e) => setSearch?.(e.target.value)}
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
        </div>

        <div className="flex items-center gap-7 justify-self-end">
          <button type="button" className="relative p-2">
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
          <Link
            to={`/login`}
            className="
        rounded-md
        border
        border-blue-700
        px-5
        py-2
        text-sm
        text-blue-700
        transition
        hover:bg-blue-50
      "
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
