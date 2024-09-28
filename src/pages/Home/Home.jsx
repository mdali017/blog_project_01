import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import PopularReadSection from "./PopularReadSection/PopularReadSection";
import LatestReviewSection from "./LatestReviewSection/LatestReviewSection";
import BuyingGuidesSection from "./BuyingGuidesSection/BuyingGuidesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PopularReadSection />
      <LatestReviewSection />
      <BuyingGuidesSection />
    </div>
  );
};

export default Home;
