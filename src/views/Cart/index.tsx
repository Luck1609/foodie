import { Close } from "@mui/icons-material";
import CartCard from "./CartCard";
import Btn from "@/components/Btn";
import { ICart } from "@/types_&_variables/misc";

export default function Cart({ open, toggleCart }: ICart) {
  return (
    <div
      className={`${
        !open ? "-mr-[500px]" : "mr-0"
      } w-[450px] shadow-custom h-full fixed top-0 right-0 bg-white z-40 divide-y`}
      style={{ transition: ".4s" }}
    >
      <div className="flex items-center justify-between p-4">
        <label className="font-bold text-2xl">Cart Items</label>
        <Btn className="" click={toggleCart}>
          <Close />
        </Btn>
      </div>

      <div className="max-h-[71vh] h-full overflow-y-scroll space-y-3 py-4">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>

      <div className="p-5 space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold block">Subtotal</label>
          <span className="">$29</span>
        </div>

        <div className="flex items-center font-bold justify-between">
          <label className="text-sm block">Total</label>
          <span className="">$29</span>
        </div>

        <div className="w-full flex justify-end">
          <Btn className="rounded-full p-4 px-10 text-white bg-emerald-500">
            Checkout
          </Btn>
        </div>
      </div>
    </div>
  );
}
