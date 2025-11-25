import Navbar from "./components/landing-page/navbar";
import Hero from "./components/landing-page/hero";
import Vision from "./components/landing-page/vision";
import Collection from "./components/landing-page/collection";
import BestSeller from "./components/landing-page/best-seller";
import Testimonials from "./components/landing-page/testimonials";
import Instagram from "./components/landing-page/instagram";
import Cta from "./components/landing-page/cta";

export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <Vision />
  <Collection />
  <BestSeller />
  <Testimonials />
  <Instagram />
  <Cta />
  </>
  );
}
