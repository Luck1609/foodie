import React from "react";
import { Remove, Add } from "@mui/icons-material";
import Btn from "@/components/Btn";

interface ICounter {
  increment: Function,
  decrement: Function,
  qty: number
}

export default function Counter({ increment, decrement, qty }: ICounter) {

  return (
    <div className="">

      <div className="w-full flex justify-between items-start mt-2 md:mt-0">

        <div className="inline-flex items-center p-1 md:p-2 rounded">
          <Btn
            className="rounded h-8 w-8 flex hover:bg-slate-100 disabled:bg-transparent"
            // onClick={decrement}
            // disabled={qty === 1}
          >
            <Remove className="text-lg m-auto" />
          </Btn>
          <span className="font-semibold py-2 text-sm px-3 md:px-3 mx-2 border rounded">{ qty }</span>
          <Btn
            className="rounded h-8 w-8 flex hover:bg-slate-100 disabled:bg-transparent"
            // onClick={increment}
          >
            <Add className="text-lg m-auto" />
          </Btn>
        </div>
      </div>
    </div>
  );
}
