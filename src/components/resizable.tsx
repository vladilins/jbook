import { ResizableBox } from "react-resizable";

import React from "react";

interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <div>
      <ResizableBox height={300} width={300}>
        {children}
      </ResizableBox>
    </div>
  );
};

export default Resizable;
