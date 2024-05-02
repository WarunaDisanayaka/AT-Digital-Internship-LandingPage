import React from "react";
import Accordion from "../Accordion/Accordion";
import "./FaqSection.css";

function FaqSection() {
  return (
    <div className=" faq-section">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h2 className="text-center">Frequently Asked Questions</h2> 
          <div className="accordion">
            <Accordion
              headerContent="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
              bodyContent="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
            <Accordion
              headerContent="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
              bodyContent="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
            <Accordion
              headerContent="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
              bodyContent="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
