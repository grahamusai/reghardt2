// components
import { Footer } from "@/components";
import Navbar from "@/components/navbar";
// sections
import Hero from "./hero";
import OurStats from "./our-stats";
import About from "./components/about";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OurStats />
      {/* <EventContent /> */}
      <Footer />
    </>
  );
}
