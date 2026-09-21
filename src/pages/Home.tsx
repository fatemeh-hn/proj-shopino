import { useState } from "react";
import CardState from "../components/card/CardState";
import Header from "../components/card/Header";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className=" bg-gray-100 ">
      <main
        className="
          bg-white
          shadow-sm
        "
      >
        <Header search={search} setSearch={setSearch} />

        <CardState search={search} />
      </main>
    </div>
  );
}

export default Home;
