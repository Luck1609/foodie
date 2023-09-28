import Btn from '@/components/Btn'
import React from 'react'

export default function ReservationForm() {
  return (
    <div className="w-full max-w-4xl grid grid-cols-2 bg-white relative z-10 rounded overflow-hidden shadow-custom">
      <div className="bg-salmon bg-cover"></div>
      <form className="px-5 py-3 space-y-3">
        <label className="font-bold text-xl block p-2 text-center">
          Book Your Reservation
        </label>

        <div className="grid gap-5">
          <input
            type="text"
            className="p-3 rounded w-full border"
            placeholder="Full Name"
          />

          <div className="grid grid-cols-4 gap-3">
            <input
              type="text"
              className="p-3 rounded w-full border col-span-2"
              placeholder="Phone number"
            />

            <input
              type="number"
              className="p-3 rounded w-full border col-span-2"
              placeholder="Number of persons"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-2">
              <label className="text-sm text-slate-500">Reservation date</label>
              <input
                type="date"
                className="p-3 rounded w-full border"
                placeholder="Reservation date"
              />
            </div>

            <div className="col-span-2">
              <label className="text-sm text-slate-500">Reservation time</label>
              <input
                type="time"
                className="p-3 rounded w-full border col-span-2"
                placeholder="Number of persons"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Btn className="bg-emerald-500 text-white p-4 px-16 rounded-full">
            Submit
          </Btn>
        </div>
      </form>
    </div>
  )
}
