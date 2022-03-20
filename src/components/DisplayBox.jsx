import React from "react";

import QuoteDisplay from "./QuoteDisplay";

function DisplayBox() {
  return (
    <div className="background">
      <div className="display-flex">
        <QuoteDisplay />
      </div>
    </div>
  );
}

export default DisplayBox;
