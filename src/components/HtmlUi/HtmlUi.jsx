import React from "react";

export const HtmlUi = ({ children }) => {
  return (
    <div className="relative h-full">
      <div className="z-10 absolute" onClick={() => console.log(123)}>
        eee
      </div>
      <div className="z-0 relative top-0 w-full h-full">{children}</div>
    </div>
  );
};
