import { LocationOnOutlined, LocalPhoneOutlined, EmailOutlined } from "@mui/icons-material";
import Btn from "@/components/Btn";

export default function ContactForm() {
  return (
    <div className="w-full py-20">
      <div className="contained grid grid-cols-2 shadow-custom rounded overflow-hidden">
        <div className="bg-reservation bg-cover flex justify-center items-center relative after:bg-black after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-opacity-50 py-20">
          <ul className="relative z-10 text-white text-xl space-y-5">
            <li className="flex items-center justify-center text-center">
              <div className="border rounded-full h-16 w-16 flex justify-center items-center">
                <LocationOnOutlined fontSize="large" className="" />
              </div>
              <div className="text-left ml-5">
                <span className=" block">
                  HNo. 23 R, Odumase,
                </span>
                <span className="block">
                  Sunyani, Bono Region - Ghana
                </span>
              </div>
            </li>
            <li className="flex items-center">
              <div className="border rounded-full h-16 w-16 flex justify-center items-center">
                <LocalPhoneOutlined fontSize="large" className="" />
              </div>
              <div className="ml-5">
                <span className="block">
                  +233 (24) 914 9420
                </span>
                <span className="block">
                  +233 (50) 389 4555
                </span>
              </div>
            </li>
            <li className="flex items-center">
              <div className="border rounded-full h-16 w-16 flex justify-center items-center">
                <EmailOutlined fontSize="large" className="" />
              </div>
              <span className="ml-5">
                contact@foodie.com
              </span>
            </li>
          </ul>
        </div>

        <form className="grid gap-5 w-4/5 m-auto py-5">
          <label className="font-bold block text-center text-3xl">
            Get In Touch
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded"
            placeholder="Enter your name"
          />
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded"
            placeholder="Enter your email address"
          />
          <textarea
            name=""
            id=""
            cols={20}
            rows={5}
            className="p-3 border rounded"
            placeholder="Enter your message here"
          ></textarea>

          <div className="flex justify-center items-center">
            <Btn className="bg-emerald-500 text-white py-4 rounded-full px-16">
              Send Message
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
}
