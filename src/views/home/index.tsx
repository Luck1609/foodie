import Hero from "./Hero";
import Menu from "./Menu";
import Popular from "./Popular";
import Reservation from "./Reservation";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Reservation />
      <Popular />
    </>
  );
}
