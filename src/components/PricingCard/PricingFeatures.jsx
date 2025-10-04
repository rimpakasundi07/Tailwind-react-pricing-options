import { Circle, CircleCheck, CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeatures = ({ feature }) => {
  return (
    <p className="flex my-5  items-center gap-3">
      <CircleCheckBig className=""></CircleCheckBig> {feature}
    </p>
  );
};

export default PricingFeatures;
