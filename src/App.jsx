import Header from "./components/header/Header";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-3">
      <main
        className="
          mx-auto
          min-h-[calc(100vh-24px)]
          max-w-350
          overflow-hidden
          rounded-xl
          border
          border-gray-200
          bg-white
          shadow-sm
        "
      >
        <Header />
        <Card />
      </main>
    </div>
  );
}

export default App;
