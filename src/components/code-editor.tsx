import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <MonacoEditor
      options={{
        wordWrap: "on",
      }}
      theme="dark"
      language="javascript"
      height="500px"
    ></MonacoEditor>
  );
};

export default CodeEditor;
