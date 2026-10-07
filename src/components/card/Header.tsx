import { Handbag, Search, ShoppingCart } from "lucide-react";
import Theme from "./Theme";
import { Link } from "react-router";

interface Props {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  showSearch?: boolean;
  showLogin?: boolean;
  showTheme?: boolean;
}

function Header({
  search,
  setSearch,
  showSearch = true,
  showLogin = true,
  showTheme = true,
}: Readonly<Props>) {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div
        className={`
          mx-auto
          max-w-337.5
          items-center
          px-4 sm:px-6
          ${
            showSearch
              ? "grid h-20 grid-cols-[1fr_500px_1fr]"
              : "flex h-16 justify-between sm:h-20"
          }
        `}
      >
        <div className="justify-self-start">
          <div className="flex shrink-0 items-center gap-3">
            <Handbag className="h-6 w-6 text-gray-900 dark:text-white" />

            <p className="text-xl font-bold text-black dark:text-white">
              Shopio
            </p>

            {showTheme && <Theme />}
          </div>
        </div>

        {showSearch && (
          <div className="w-full">
            <div className="relative w-full">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
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
                  bg-white
                  py-3
                  pl-12
                  pr-4
                  text-gray-900
                  outline-none
                  placeholder:text-gray-400
                  focus:border-gray-400
                  dark:border-gray-600
                  dark:bg-gray-800
                  dark:text-white
                  dark:placeholder:text-gray-500
                  dark:focus:border-gray-500
                "
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-7 justify-self-end">
          <button
            type="button"
            className="relative p-2 text-gray-900 dark:text-gray-100"
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

          {showLogin && (
            <Link
              to="/login"
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
                dark:border-blue-400
                dark:text-blue-400
                dark:hover:bg-blue-950
              "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
