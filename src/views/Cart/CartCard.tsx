import { useState } from 'react'
import { Delete, SaveAltOutlined, AddShoppingCartOutlined  } from '@mui/icons-material';
import { categories } from "./variables";
import { assets } from "@/assets/img";
import LinkItem from "@/components/Link";
import Btn from "@/components/Btn";
import Counter from "./Counter";

export default function CartCard() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Breakfast");

  const handleSelection = (label: string) => () => setSelectedCategory(label);

  
  const updateCartAction = (action: string) => () => console.log("Cart update action", action)
  
  
  return (
    <div className="flex items-start md:px-5 rounded gap-5 relative">
      <div className="flex items-center">

        <div className="w-16 md:w-24 rounded overflow-hidden">
          <img
            src={`${assets.salmon_sm}`}
            alt=""
            className=""
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-start">
          <label className="block w-full text-xl font-semibold">
            Product name
          </label>

          <div className="flex">
            <Btn
              className="hover:bg-red-100 p-2 h-8 text-red-500 flex items-center rounded"
            >
              <Delete className="text-[16px] md:text-lg" />
            </Btn>
          </div>
        </div>


        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-semibold text-amber-500">Price: $29</span>
          <Counter 
            qty={1}
            increment={updateCartAction("increment")}
            decrement={updateCartAction("decrement")}
          />
        </div>
      </div>
    </div>
  )
}
