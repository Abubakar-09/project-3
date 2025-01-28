import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";
import Company from "./components/Company";
import OurProducts from "./components/OurProducts";
import TopCategories from "./components/TopCategories";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
      <Company />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
      <FeaturedProducts />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
      <TopCategories />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
      <Gallery />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
      <OurProducts />
    </>
  );
}
