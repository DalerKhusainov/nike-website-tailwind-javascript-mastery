// components
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import SuperQuality from "@/components/SuperQuality";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import CustomerReviews from "@/components/CustomerReviews";
import Subscribe from "@/components/Subscribe";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </main>
  );
};

export default Home;
