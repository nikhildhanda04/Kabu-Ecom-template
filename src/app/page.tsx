import Navbar from "./components/landing-page/navbar";
import Hero from "./components/landing-page/hero";
import Vision from "./components/landing-page/vision";
import Collection from "./components/landing-page/collection";
import BestSeller from "./components/landing-page/best-seller";

export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <Vision />
  <Collection />
  <BestSeller />
  </>
  );
}
