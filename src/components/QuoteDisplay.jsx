import React from "react";
import { useSelector } from "react-redux";
import line from "../img/pause (1).png";
import ButtonForNewQuote from "./ButtonForNewQuote";

function QuoteDisplay() {
  const { id, advice } = useSelector((state) => state.quoteee.value);
  return (
    <div className="inner-box">
      <div className="advice-text">ADVICE #{id}</div>
      <div className="advice-itself">"{advice}"</div>
      <div className="">
        <div class="divider line one-line">
          <img src={line} alt="" className="button-img" />
        </div>
        <ButtonForNewQuote />
      </div>
    </div>
  );
}

export default QuoteDisplay;
