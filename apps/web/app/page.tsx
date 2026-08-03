import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Destinations from "@/components/home/Destinations";
import RouteMap from "@/components/home/RouteMap";
import Experience from "@/components/home/Experience";
import Cargo from "@/components/home/Cargo";
import Investor from "@/components/home/Investor";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Destinations />
      <RouteMap />
      <Experience />
      <Cargo />
      <Investor />
      <Footer />
    </main>
  );
}
