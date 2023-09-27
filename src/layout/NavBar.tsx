import React from "react";
import { assets } from "@/assets/img";
import Btn from "@/components/Btn";

export default function NavBar() {
  return (
    <nav className="w-full py-2 fixed bg-white">
      <div className="contained w-full flex justify-between items-center">
        <img src={assets.logo} alt="" className="h-16" />

        <ul className="space-x-4 flex text-lg font-medium">
          <li className="p-2">Menu</li>
          <li className="p-2">Reservation</li>
          <li className="p-2">About</li>
        </ul>

        <ul className="flex items-center">
          <li className="p-2">Cart here</li>
          <li className="p-2">
            <Btn className="bg-amber-500 py-3 rounded-full text-white px-8">Login</Btn>
          </li>
        </ul>
      </div>
    </nav>
  );
}
