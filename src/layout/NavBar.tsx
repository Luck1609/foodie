import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { assets } from "@/assets/img";
import Btn from "@/components/Btn";
import { ICart, INavLinks } from "@/types_&_variables/misc";
import { navLinks } from "@/types_&_variables/variables";

export default function NavBar({ toggleCart }: ICart) {
  return (
    <nav className="w-full py-2 bg-white">
      <div className="contained w-full flex justify-between items-center">
        <img src={assets.logo} alt="" className="h-16" />

        <ul className="space-x-10 flex text-lg font-medium">
          {
            navLinks.map(({ url, label }: INavLinks) => (
              <li className="" key={label}>
                <NavLink 
                  to={url} style={{ transition: ".5s" }} 
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-emerald-500 py-4" : "py-4"
                  }
                >{label}</NavLink>
              </li>
            ))
          }
        </ul>

        <ul className="flex items-center">
          <li className="p-2 relative">
            <Btn click={toggleCart}>
              <ShoppingCartOutlined className="" style={{ fontSize: 30 }} />
            </Btn>
          </li>
          <li className="p-2">
            <Btn className="bg-amber-500 py-3 rounded-full text-white px-8">
              Login
            </Btn>
          </li>
        </ul>
      </div>
    </nav>
  );
}
