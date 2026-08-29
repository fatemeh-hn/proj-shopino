import { Handbag } from "lucide-react";

function Title() {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <Handbag className="h-6 w-6" />

      <p className="text-xl font-bold text-black">
        Shopio
      </p>
    </div>
  );
}

export default Title;