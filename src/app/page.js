import Image from "next/image";
import Hero from "./component/home/hero";
import Navbar from "./component/nav";
import HowItWorks from "./component/home/howitwork";
import FeaturedArticles from "./component/home/three";
import WhatsappSection from "./component/home/job";
import Footer from './component/footer';


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <HowItWorks/>
      <FeaturedArticles/>
      <WhatsappSection/>
      <Footer/>
    </div>
  );
}
