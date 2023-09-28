import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <div className="w-full bg-general bg-cover bg-fixed relative after:bg-black after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-opacity-50 py-20">
        <Header 
          title="About"
          desc="Get to know more about us"
        />
      </div>
    </>
  )
}
