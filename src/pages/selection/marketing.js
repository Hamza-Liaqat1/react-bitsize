import React from "react";
import {marketingData} from "../../Data/data";

import Cards from "../../containers/Cards";
const Marketing = () => {
  return (
    <div className="background">
      <Cards cardsData={marketingData} />
    </div>
  );
};

export default Marketing;
