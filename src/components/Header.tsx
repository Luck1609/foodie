import Divider from "@/components/Divider";


export default function Header({ title, desc }: {title: string, desc: string}) {
  return (
    <div className="text-white relative z-10 space-y-3">
      <h2 className="font-bold text-5xl text-center">{ title }</h2>
      <Divider />
      <label className="block text-center text-lg font-medium">{ desc }</label>
    </div>
  )
}
