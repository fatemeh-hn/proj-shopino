import {
  Slider,
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { ChevronUp, SlidersHorizontal } from "lucide-react";

interface FiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

function Filters({
  categories,
  selectedCategory,
  onCategoryChange,
}: Readonly<FiltersProps>) {
  return (
    <div>
      <aside className="w-60 shrink-0 self-start rounded-2xl border border-gray-200 p-1.5">
        <div className="relative p-3 flex justify-between pb-4">
          <h3 className="mb-4 font-bold">Filters</h3>
          <SlidersHorizontal />

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200" />
        </div>
        <div className="p-3 flex justify-between">
          <p className="mb-4 font-medium ">Price</p>
          <ChevronUp className="text-gray-400" />
        </div>
        <Box sx={{ px: 2 }}>
          <Slider getAriaLabel={() => "price range"} valueLabelDisplay="auto" />
        </Box>
        <div className="relative flex gap-6 p-3 pb-7">
          <Button
            variant="outlined"
            className="text-gray-400! border-gray-200! hover:border-gray-200!"
          >
            $min
          </Button>
          <p>_</p>
          <Button
            variant="outlined"
            className="text-gray-400! border-gray-200! hover:border-gray-200!"
          >
            $max
          </Button>

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200" />
        </div>
        <div className="p-3 flex justify-between">
          <p className="font-medium ">Availability</p>
          <ChevronUp className="text-gray-400" />
        </div>
        <FormGroup className="p-3 pb-7 relative">
          <FormControlLabel
            control={<Checkbox defaultChecked sx={{ color: "#e5e7eb" }} />}
            label="In Stock"
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "#e5e7eb" }} />}
            label="Low Stock"
          />

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200" />
        </FormGroup>
        <div className="p-3 flex justify-between">
          <p className="font-medium ">Categories</p>
          <ChevronUp className="text-gray-400" />
        </div>
        <FormGroup className="p-3 pb-7 relative">
          {categories?.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  sx={{ color: "#e5e7eb" }}
                />
              }
              label={category}
            />
          ))}

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200" />
        </FormGroup>
        <div className="my-4 text-center">
          <Button
            variant="outlined"
            className="text-gray-400! border-gray-200! hover:border-gray-200! w-[87%]"
            onClick={()=>onCategoryChange("All")}
          >
            Clear Filters
          </Button>
        </div>
      </aside>
    </div>
  );
}

export default Filters;
