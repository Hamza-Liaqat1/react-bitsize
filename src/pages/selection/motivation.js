import React from "react";
import {motivationData} from "../../Data/data";
import Cards from "../../containers/Cards";
const Motivation = () => {
  return (
    <div className="background">
      <Cards cardsData={motivationData} />
    </div>
  );
};

export default Motivation;
