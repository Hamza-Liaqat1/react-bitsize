import React from "react";
import {prodcutivityData} from "../../Data/data";
import Cards from "../../containers/Cards";
const Productivity = () => {
  return (
    <div>
      <Cards cardsData={prodcutivityData}/>
    </div>
  );
};

export default Productivity;
