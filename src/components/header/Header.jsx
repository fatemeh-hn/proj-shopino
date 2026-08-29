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
          max-w-337.5
          grid-cols-[1fr_500px_1fr]
          items-center
          px-6
        "
      >
        
        <div className="justify-self-start">
          <Title />
        </div>

        
        <div className="w-full">
          <Input />
        </div>

        
        <div className="flex items-center gap-7 justify-self-end">
          <Shop />
          <Login />
        </div>
      </div>
    </header>
  );
}

export default Header;