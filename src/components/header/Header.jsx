import Title from "./Title";
import Input from "./Input";
import Shop from "./Shop";
import Login from "./Login";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div
        className="
          mx-auto
          grid
          h-20
          max-w-[1350px]
          grid-cols-[1fr_500px_1fr]
          items-center
          px-6
        "
      >
        {/* Left */}
        <div className="justify-self-start">
          <Title />
        </div>

        {/* Center */}
        <div className="w-full">
          <Input />
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 justify-self-end">
          <Shop />
          <Login />
        </div>
      </div>
    </header>
  );
}

export default Header;