import { useState } from "react";
import CardState from "../components/card/CardState";
import Header from "../components/card/Header";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <main className="bg-white shadow-sm dark:bg-gray-900 dark:shadow-none">
        <Header search={search} setSearch={setSearch} />

        <CardState search={search} />
      </main>
    </div>
  );
}

export default Home;
