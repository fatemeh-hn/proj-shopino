import Card from "./Card";

function CardState() {
  return (
    <section className="mx-auto w-full max-w-300 p-5">
      <div className="flex gap-6">

        {/* Filters */}
        <aside className="w-60 shrink-0">
          <h3 className="mb-4 font-bold">Filters</h3>

          <label className="flex gap-2">
            <input type="checkbox" />
            Watches
          </label>

          <label className="mt-2 flex gap-2">
            <input type="checkbox" />
            Shoes
          </label>
        </aside>

        
        <div className="flex-1">

          
          <div className="mb-5 flex items-center gap-2">
            <h2 className="text-xl font-bold text-black">
              All Products
            </h2>

            <p className="text-sm text-gray-400">
              30 items
            </p>
          </div>

          
          <div className="flex flex-wrap gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </div>

      </div>
    </section>
  );
}

export default CardState;