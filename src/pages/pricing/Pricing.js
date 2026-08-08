import React, { useState } from "react";

import PricingHero from "./PricingHero";
import ServiceSection from "./ServiceSection";
import CheckoutDrawer from "./CheckoutDrawer";
import DevelopmentProcess from "./DevelopmentProcess";
import FAQ from "../FAQ";
import CTA from "../CTA";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      {/* Pricing Hero Section */}
      <PricingHero />

      {/* Pricing Packages */}
      <ServiceSection
        onBuyNow={setSelectedPlan}
      />

      {/* Development Process */}
      <DevelopmentProcess />

      {/* FAQ */}
      <FAQ />

      {/* Call To Action */}
      <CTA />

      {/* Checkout Drawer */}
      <CheckoutDrawer
        open={!!selectedPlan}
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </>
  );
};

export default Pricing;
