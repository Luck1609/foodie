import { assets } from '@/assets/img'
import { Rating } from '@mui/material'

export default function FoodCard() {
  return (
    <div className="shadow-custom border-slate-50 rounded overflow-hidden">
      <img src={assets.salmon_sm} alt="" />

      <div className=" bg-white p-3 space-y-3">
        <label className="font-bold text-2xl block">Some Food name</label>
        <div className="">
          <Rating value={4} readOnly />
          <span className="text-lg block"><span className="font-bold mr-2">Price:</span>$29</span>
        </div>
      </div>
    </div>
  )
}
