import React, { useState } from "react";
import CheckoutDrawer from "./CheckoutDrawer";
import PricingCards from "./PricingCards";

const Pricing = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBuyNow = (plan) => {
    setSelectedPlan(plan);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <PricingCards onBuyNow={handleBuyNow} />

      <CheckoutDrawer
        open={drawerOpen}
        plan={selectedPlan}
        onClose={handleCloseDrawer}
      />
    </>
  );
};

export default Pricing;
