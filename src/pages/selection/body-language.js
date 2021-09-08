import React from "react";
import {bodyLanguageData} from "../../Data/data";

import Cards from "../../containers/Cards";
const BodyLanguage = () => {
  return (
    <div>
      <Cards cardsData={bodyLanguageData}/>
    </div>
  );
};

export default BodyLanguage;
