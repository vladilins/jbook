import "bulmaswatch/superhero/bulmaswatch.min.css";
import * as esbuild from "esbuild-wasm";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { fetchPlugin } from "./plugins/fetch-plugin";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import CodeEditor from "./components/code-editor";
import Preview from "./components/preview";

const App = () => {
  const ref = useRef<any>();
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current) {
      return;
    }

    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: "window",
      },
    });

    setCode(result.outputFiles[0].text);
  };

  return (
    <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      ></CodeEditor>

      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
