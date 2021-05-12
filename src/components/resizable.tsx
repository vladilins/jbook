import { ResizableBox } from "react-resizable";
import "./resizable.css";

import React from "react";

interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <div>
      <ResizableBox resizeHandles={["s"]} height={Infinity} width={Infinity}>
        {children}
      </ResizableBox>
    </div>
  );
};

export default Resizable;
