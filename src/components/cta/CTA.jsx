import React from "react";
import "./cta.scss";

export const CTA = () => (
  <div className="container flex cta" id="cta">
    <div className="cta__content">
      <p className="cta__subtitle">Register today &amp; start exploring the endless possiblities.</p>
      <p className="cta__title">Request Early Access to Get Started</p>
    </div>
    <div className="cta__btn">
      <button>Get Started</button>
    </div>
  </div>
)

export default CTA;