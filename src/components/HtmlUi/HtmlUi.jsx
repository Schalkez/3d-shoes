import { atom, useAtom } from "jotai";
import React from "react";
import { TwitterPicker } from "react-color";

export const defaultColor = atom({
  hsl: {
    h: 24.705882352941174,
    s: 1,
    l: 0.5,
    a: 1,
  },
  hex: "#ff6900",
  rgb: {
    r: 255,
    g: 105,
    b: 0,
    a: 1,
  },
  hsv: {
    h: 24.705882352941174,
    s: 1,
    v: 1,
    a: 1,
  },
  oldHue: 24.705882352941174,
  source: "hex",
});

export const HtmlUi = ({ children }) => {
  const [selectedColor, setSelectedColor] = useAtom(defaultColor);
  console.log(selectedColor);
  return (
    <div className="relative h-full">
      <TwitterPicker
        onChange={(color) => setSelectedColor(color)}
        color={selectedColor}
        triangle="hide"
        className="m-4"
      />
      <div className="z-0 relative top-0 w-full h-full">{children}</div>
    </div>
  );
};
