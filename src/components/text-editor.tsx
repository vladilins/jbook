import "./text-editor.css";
import React, { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";

const TextEditor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && e.target && ref.current.contains(e.target as Node)) {
        console.log("clicked");
        return;
      }
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div ref={ref}>
        <MDEditor />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={"# Header"} />
    </div>
  );
};

export default TextEditor;
