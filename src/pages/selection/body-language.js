import React from "react";
import { bodyLanguageData } from "../../Data/data";

import Cards from "../../containers/Cards";
import BgImage from "../../assets/images/Opened Card Page.svg";
const BodyLanguage = () => {
  return (
    <div className="background">
      <Cards cardsData={bodyLanguageData} />
    </div>
  );
};

export default BodyLanguage;
