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
  availability: string[];
  selectedAvailability: string;
  onAvailabilityChange: (availabilityStatus: string) => void;
  minPrice: number;
  maxPrice: number;
  priceRange: [number, number];
  onPriceChange: (value: [number, number]) => void;
}

function Filters({
  categories,
  selectedCategory,
  onCategoryChange,
  availability,
  selectedAvailability,
  onAvailabilityChange,
  minPrice,
  maxPrice,
  priceRange,
  onPriceChange,
}: Readonly<FiltersProps>) {
  return (
    <div>
      <aside
        className="
          w-60
          shrink-0
          self-start
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-1.5
          dark:border-gray-700
          dark:bg-gray-800
        "
      >
        {/* Filters Header */}
        <div className="relative flex justify-between p-3 pb-4">
          <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
            Filters
          </h3>

          <SlidersHorizontal className="text-gray-700 dark:text-gray-200" />

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Price Header */}
        <div className="flex justify-between p-3">
          <p className="mb-4 font-medium text-gray-900 dark:text-gray-100">
            Price
          </p>

          <ChevronUp className="text-gray-400 dark:text-gray-300" />
        </div>

        {/* Price Slider */}
        <Box sx={{ px: 2 }}>
          <Slider
            value={priceRange}
            min={minPrice}
            max={maxPrice}
            valueLabelDisplay="auto"
            onChange={(_, newValue) => {
              onPriceChange(newValue as [number, number]);
            }}
            sx={{
              color: "#2563eb",

              ".MuiSlider-thumb": {
                "@media (prefers-color-scheme: dark)": {
                  borderColor: "#93c5fd",
                },
              },
            }}
          />
        </Box>

        {/* Price Range */}
        <div className="relative flex gap-6 p-3 pb-7">
          <Button
            variant="outlined"
            className="
              !border-gray-200
              !text-gray-600
              hover:!border-gray-300
              dark:!border-gray-600
              dark:!text-gray-300
              dark:hover:!border-gray-500
            "
          >
            ${priceRange[0]}
          </Button>

          <p className="text-gray-500 dark:text-gray-400">_</p>

          <Button
            variant="outlined"
            className="
              !border-gray-200
              !text-gray-600
              hover:!border-gray-300
              dark:!border-gray-600
              dark:!text-gray-300
              dark:hover:!border-gray-500
            "
          >
            ${priceRange[1]}
          </Button>

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Availability Header */}
        <div className="flex justify-between p-3">
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Availability
          </p>

          <ChevronUp className="text-gray-400 dark:text-gray-300" />
        </div>

        {/* Availability */}
        <FormGroup className="relative p-3 pb-7">
          {availability.map((availabilityStatus) => (
            <FormControlLabel
              key={availabilityStatus}
              control={
                <Checkbox
                  checked={selectedAvailability === availabilityStatus}
                  onChange={() =>
                    onAvailabilityChange(availabilityStatus)
                  }
                  sx={{
                    color: "#64748b",

                    "&.Mui-checked": {
                      color: "#2563eb",
                    },

                    ".dark &": {
                      color: "#9ca3af",

                      "&.Mui-checked": {
                        color: "#60a5fa",
                      },
                    },
                  }}
                />
              }
              label={availabilityStatus}
              sx={{
                marginLeft: 0,

                "& .MuiFormControlLabel-label": {
                  color: "#374151",
                  fontSize: "16px",
                },

                ".dark & .MuiFormControlLabel-label": {
                  color: "#e5e7eb",
                },
              }}
            />
          ))}

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200 dark:bg-gray-700" />
        </FormGroup>

        {/* Categories Header */}
        <div className="flex justify-between p-3">
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Categories
          </p>

          <ChevronUp className="text-gray-400 dark:text-gray-300" />
        </div>

        {/* Categories */}
        <FormGroup className="relative p-3 pb-7">
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  sx={{
                    color: "#64748b",

                    "&.Mui-checked": {
                      color: "#2563eb",
                    },

                    ".dark &": {
                      color: "#9ca3af",

                      "&.Mui-checked": {
                        color: "#60a5fa",
                      },
                    },
                  }}
                />
              }
              label={category}
              sx={{
                marginLeft: 0,

                "& .MuiFormControlLabel-label": {
                  color: "#374151",
                  fontSize: "16px",
                },

                ".dark & .MuiFormControlLabel-label": {
                  color: "#e5e7eb",
                },
              }}
            />
          ))}

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200 dark:bg-gray-700" />
        </FormGroup>

        {/* Clear Filters */}
        <div className="my-4 text-center">
          <Button
            variant="outlined"
            className="
              w-[87%]
              !border-gray-200
              !text-gray-600
              hover:!border-gray-300
              dark:!border-gray-600
              dark:!text-gray-300
              dark:hover:!border-gray-500
            "
            onClick={() => {
              onCategoryChange("All");
              onAvailabilityChange("All");
              onPriceChange([minPrice, maxPrice]);
            }}
          >
            Clear Filters
          </Button>
        </div>
      </aside>
    </div>
  );
}

export default Filters;