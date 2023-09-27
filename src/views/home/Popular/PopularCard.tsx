import React from 'react'
import { assets } from '@/assets/img'

export default function PopularCard() {
  return (
    <div className="shadow shadow-slate-100 border-slate-50 rounded overflow-hidden">
      <img src={assets.salmon_sm} alt="" />

      <div className=" bg-white p-3 space-y-3">
        <label className="font-bold text-2xl block">Some Food name</label>
        <span className="text-lg"><span className="font-bold mr-2">Price:</span>$29</span>
      </div>
    </div>
  )
}
