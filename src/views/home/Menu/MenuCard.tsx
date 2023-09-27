import React from "react";
import { assets } from "@/assets/img";

export default function MenuCard() {
  return (
    <div className="bg-white shadow p-3 flex rounded items-center">
      <div className="w-2/6">
        <img src={assets.salmon_sm} alt="" className="w-28 h-28 mr-5 rounded" />
      </div>

      <div className="w-4/6 flex justify-between font-semibold ">
        <label className="text-2xl">Sea Foods</label>
        <span className="text-xl">$12</span>
      </div>
    </div>
  );
}
