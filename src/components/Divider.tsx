export default function Divider() {
  return (
    <div className="w-full flex items-center justify-center ">
      <span className="h-[1px] bg-white w-[200px] relative after:absolute after:right-0 after:h-1.5 after:w-1.5 after:rounded-full after:-top-0.5 after:bg-white"></span>
      <span className="h-4 w-4 border border-white mx-3 rounded-full"></span>
      <span className="h-[1px] bg-white w-[200px] relative before:absolute before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:-top-0.5 before:bg-white"></span>
    </div>
  )
}
