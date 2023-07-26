import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="flex shopping-card">
      <div>Shopping Cart</div>
      <div>
        {" "}
        Cart
        <sup>{"3"}</sup>
      </div>
    </div>
  );
}

export default Header;
