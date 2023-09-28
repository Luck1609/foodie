import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Header from "@/components/Header";
import FoodCard from "@/components/FoodCard";
import { categories } from "../../types_&_variables/variables";

const styles =
  "flex flex-col justify-center items-center relative after:h-[1px] after:bg-slate-200 after:w-20 after:last:w-0 after:absolute after:top-10 after:-right-24";
const iconStyles =
  "w-20 h-20 rounded-full flex justify-center items-center mb-1";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Breakfast");

  const handleSelection = (label: string) => () => setSelectedCategory(label);

  return (
    <>
      <div className="w-full bg-general bg-cover bg-fixed relative after:bg-black after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-opacity-50 py-20">
        <Header
          title="Menu"
          desc="Explore our wonderful menu of dishes specially made for you!"
        />
      </div>

      <div className="w-full py-32">
        <div className="contained ">
          <h3
            className="font-bold text-4xl text-center"
            style={{ transition: ".2s" }}
          >
            {selectedCategory}
          </h3>

          <div className="flex justify-center my-16">
            <ul className="flex items-center space-x-28">
              {categories.map(({ label, Icon }) => (
                <li
                  className={styles}
                  key={label}
                  role="button"
                  onClick={handleSelection(label)}
                >
                  <div
                    className={`${iconStyles} ${
                      selectedCategory === label
                        ? "border border-amber-500 text-amber-500"
                        : ""
                    }`}
                    style={{ transition: ".2s" }}
                  >
                    <Icon active={selectedCategory === label} />
                  </div>
                  <span
                    className={`font-medium text-lg ${
                      selectedCategory === label
                        ? "text-amber-500 font-semibold"
                        : ""
                    }`}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[...Array(12).keys()].map((_, index) => (
              <FoodCard key={index.toString()} />
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </>
  );
}
