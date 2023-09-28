
export default function Hero() {
  return (
    <div className="bgwhite">
    {/* <div className="bg-[#e9d6cb] bg-gradient-to-br from-slate-100"> */}
      <div className="pt-44 pb-20 font-bold grid md:grid-cols-2 content-center contained">
        <div className="flex flex-col justify-center space-y-7">
          <h1 className="font-extrabold text-7xl leading-tight">
            Your favourite food gets even better
          </h1>

          <p className="text-xl">
            All the things we eat are called food. But not all food items are
            called food. For example bran is made up of cellulose and is not
            digested in our digestive tract
          </p>

          <div className="flex space-x-5">
            <button className="rounded-full bg-teal-700 text-white py-4 px-12">Order Now</button>
            <button className="rounded-full bg-amber-700 text-white py-4 px-12">Check out our menu</button>
          </div>
        </div>

        <div className="bg-hero bg-cover rounded-lg -ml-10"></div>
      </div>
    </div>
  )
}
