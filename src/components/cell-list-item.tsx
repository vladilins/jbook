import React from "react";
import { useDispatch } from "react-redux";
import { Cell } from "../state";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  const dispatch = useDispatch()
  
  let child: JSX.Element;
  if (cell.type === "code") {
    child = <CodeCell />;
  } else {
    child = <TextEditor />;
  }

  return <div>{child}</div>;
};

export default CellListItem;
