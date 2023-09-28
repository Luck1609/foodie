import Header from "@/components/Header";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <div className="w-full bg-general bg-cover bg-fixed relative after:bg-black after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-opacity-50 py-20">
        <Header 
          title="Contact Us"
          desc="Reach out to us, we are ever ready to welcome you!"
        />
      </div>

      <ContactForm />
    </>
  )
}
