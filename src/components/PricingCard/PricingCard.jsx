import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="flex  flex-col border bg-blue-950 rounded-2xl p-4">
      {/* card header  */}
      <div className="space-y-4">
        <h1 className="text-6xl text-center">{name}</h1>
        <h4 className="text-3xl  italic text-center">{price}</h4>
      </div>
      {/* card body */}
      <div className="bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] p-5 rounded-2xl mt-10 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
