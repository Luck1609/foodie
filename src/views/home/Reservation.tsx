import Btn from '@/components/Btn'

export default function Reservation() {
  return (
    // <div className="w-full">
    // <div className="w-full bg-knife bg-cover py-20 flex justify-center relative after:bg-black after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-opacity-25 bg-fixed">
    // <div className="w-full bg-knife bg-cover py-20 flex justify-center mt-52">
    <div className="w-full bg-knife bg-cover py-20 flex justify-center relative after:bg-white after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-opacity-25 bg-fixed">
      {/* <div className="contained bg-knife bg-cover py-20 flex justify-center"> */}
        <div className="max-w-[400px] w-full bg-white rounded shadow-custom overflow-hidden relative z-10 pb-10 space-y-5">
          <h3 className="block w-full p-3 font-bold text-3xl text-center bg-emerald-500 text-white">Reservation</h3>
          <label className="font-bold text-center text-2xl block">Open Hours</label>

          <ul className="divide-y divide-dashed px-5">
            <li className="p-3 flex justify-between">
              <label className="font-semibold text-lg">Week Days</label>
              <span className="">8:00 - 22:00</span>
            </li>
            <li className="p-3 flex justify-between">
              <label className="font-semibold text-lg">Saturdays</label>
              <span className="">6:00 - 00:00</span>
            </li>
            <li className="p-3 flex justify-between">
              <label className="font-semibold text-lg">Sundays</label>
              <span className="">15:00 - 23:00</span>
            </li>
          </ul>

          <div className="text-center space-y-3">
            <p className="">Book you table for lunch or dinner</p>
            <label className="font-bold text-2xl block">+233 (50) 389 4555</label>
            <Btn className="border border-amber-500 text-amber-500 rounded-full py-3 px-10">Book Now</Btn>
          </div>
        </div>
      {/* </div> */}
      
    </div>
  )
}
