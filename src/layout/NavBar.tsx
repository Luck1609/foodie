import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { assets } from "@/assets/img";
import Btn from "@/components/Btn";
import LinkItem from "@/components/Link";

export default function NavBar() {
  return (
    <nav className="w-full py-2 bg-white">
      <div className="contained w-full flex justify-between items-center">
        <img src={assets.logo} alt="" className="h-16" />

        <ul className="space-x-4 flex text-lg font-medium">
          <li className="p-2">
            <LinkItem url="/menu">Menu</LinkItem>
          </li>
          <li className="p-2">
            <LinkItem url="/reservations">Reservation</LinkItem>
          </li>
          <li className="p-2">
            <LinkItem url="/about">About</LinkItem>
          </li>
          <li className="p-2">
            <LinkItem url="/contact">Contact</LinkItem>
          </li>
        </ul>

        <ul className="flex items-center">
          <li className="p-2 relative">
            <ShoppingCartOutlined className="" style={{ fontSize: 30 }} />
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
