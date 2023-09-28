import MenuCard from './MenuCard'
import BaseTemplate from '../BaseTemplate'
import Btn from '@/components/Btn'

export default function Menu() {
  return (
    <BaseTemplate 
      className="bg-slate-50"
      content={
        <>
          <h3 className="font-bold text-4xl text-center mb-4">Explore Our Menu</h3>
          <label className="block text-lg font-medium text-center">Look through and select one of our amazing dishes</label>
        </>
      }
      cards={
        <div className="w-full grid md:grid-cols-3 md:gap-5">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />

          <div className="md:col-span-3 w-full flex justify-center mt-8">
            <Btn className="bg-emerald-500 text-white rounded-full px-10 py-4">Explore More Dishes</Btn>
          </div>
        </div>
      }
    />
  )
}
