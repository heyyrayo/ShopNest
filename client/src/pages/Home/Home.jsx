import Hero from "../../components/sections/Hero";
import Categories from "../../components/sections/Categories";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import Features from "../../components/sections/Features";
import Newsletter from "../../components/sections/Newsletter";
import CTA from "../../components/sections/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Newsletter />
      <CTA />
    </>
  );
}

export default Home;