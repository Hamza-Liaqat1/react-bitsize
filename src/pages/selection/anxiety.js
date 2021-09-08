import React from "react";
import {anxietyData} from "../../Data/data";

// import {TwitterShareButton} from "react-share";
import Cards from "../../containers/Cards";

const Anxiety = () => {

  return (
    <div>
      <Cards cardsData={anxietyData} />
    </div>
  );
};

export default Anxiety;
