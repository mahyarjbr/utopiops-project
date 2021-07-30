import React from "react";
import LeftSection from './LeftSection';
import Posts from "./Posts";

const mainSection = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <LeftSection />
          </div>
          <div className="col-lg-9">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainSection;
