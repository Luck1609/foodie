import BaseTemplate from '../BaseTemplate'
import PopularCard from './PopularCard'

export default function Popular() {
  return (
    <BaseTemplate 
      content={
        <>
          <h3 className="font-bold text-4xl text-center mb-4">Popular foods</h3>
          <label className="block text-lg font-medium text-center">Here are some of our most requested dishes from us to you!</label>
        </>
      }
      className=""
      cards={
        <div className="w-full grid md:grid-cols-4 md:gap-10">
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      }
    />
  )
}
