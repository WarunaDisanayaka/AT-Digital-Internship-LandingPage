import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ headerContent, bodyContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("#000000");
  const [contentColor, setContentColor] = useState("#000000");
  const [iconColor, setIconColor] = useState("#000000");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleHeaderColor = () => {
    const newHeaderColor = headerColor === "#000000" ? "#6B3CC9" : "#000000";
    const newContentColor = contentColor === "#000000" ? "#6F6C90" : "#000000";
    const newIconColor = iconColor === "#000000" ? "#6B3CC9" : "#000000";
    
    setHeaderColor(newHeaderColor);
    setContentColor(newContentColor);
    setIconColor(newIconColor);
  };

  return (
    <div className="accordion" style={{ marginBottom: isOpen ? "5rem" : "1rem" }}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-header-content" style={{ color: headerColor }}>{headerContent}</div>
        <div className="accordion-header-icon" style={{ color: iconColor }} onClick={toggleHeaderColor}>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && (
        <div className="accordion-content" style={{ color: contentColor }}>
          {bodyContent}
        </div>
      )}
    </div>
  );
}

export default Accordion;
