import { useState } from "react";
import Button from "./components/Button/Button";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import "./styles/global.css";

function App() {
  const [value, setValue] = useState("option1");

  return (
    <div
      data-theme="dark"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "500px", height: "52px" }}>
        <Button theme="light" variant="emphasis">
          Hello World
        </Button>
      </div>

      <div
        style={{
          width: "500px",
          height: "52px",
          border: "solid red",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <RadioGroup
          theme="dark"
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ]}
          value={value}
          onChange={(val) => setValue(val)}
        />
      </div>
    </div>
  );
}

export default App;
