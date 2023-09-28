import Header from "@/components/Header";
import ReservationForm from "./ReservationForm";

export default function Reservation() {
  return (
    <div className="w-full flex justify-center items-center bg-reservation bg-cover h-screen relative after:bg-black after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-opacity-50 bg-fixed">
      <div className="space-y-20">
        <Header 
          title="Reservation"
          desc="Just a few click to make the reservation online for saving your time and money"
        />
        <ReservationForm />
      </div>
    </div>
  );
}
