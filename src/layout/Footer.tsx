import React from "react";
import { assets } from "@/assets/img";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 py-16 text-white">
      <div className="contained grid md:grid-cols-5  md:gap-5 font-lg space-y-10 md:space-y-0 px-5 md:px-0">
        <div className="">
          <div className="flex flex-col items-center md:w-5/6 text-center">
            <img src={assets.logo_sm} alt="" className="w-16 h-16 mb-3" />
            <p className="">
              We will continue to provide the best food with you in mind
            </p>
          </div>
        </div>

        <div className="md:col-span-4 w-full md:grid md:grid-cols-6 text-center md:text-left space-y-10 md:space-y-0">
          <ul>
            <li className="p-2 font-bold text-2xl">Support</li>
            <li className="p-2">FAQ</li>
            <li className="p-2">Contact Us</li>
          </ul>

          <ul>
            <li className="p-2 font-bold text-2xl">Info</li>
            <li className="p-2">About</li>
            <li className="p-2">Our Services</li>
          </ul>

          <ul className="md:col-span-2 px-5 md:px-0">
            <li className="p-2 font-bold text-2xl">Contact</li>
            <li className="p-2 pr-5">
              HNo. 23 R, Odumase, Sunyani, Bono Region - Ghana
            </li>
            <li className="p-2">info@foodie.com</li>
            <li className="p-2">+233249149420</li>
            <li className="p-2">+233503894555</li>
          </ul>

          <div className="md:col-span-2">
            <label className="p-2 mb-3 md:mb-0 font-bold text-2xl block">
              Join Our Newsletter
            </label>
            <form className="flex">
              <input
                type="text"
                className="w-full border-b p-2 bg-transparent mr-2"
                placeholder="Enter your email address"
              />
              <button type="submit" className="bg-emerald-500 p-2 rounded">
                Submit
              </button>
            </form>

            <label className="px-2 pt-8 pb-2 font-bold text-2xl block">
              Follow Us
            </label>
            <ul className="space-x-5 flex">
              <li className="">Facebook</li>
              <li className="">Instagram</li>
              <li className="">X</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
