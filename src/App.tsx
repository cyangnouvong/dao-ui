import { useState } from "react";
import Button from "./components/Button/Button";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import Drawer from "./components/Drawer/Drawer";
import Text from "./components/Text/Text";
import "./styles/global.css";

function App() {
  const [value, setValue] = useState("option1");
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"left" | "right">("right");

  return (
    <div
      data-theme="dark"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "1000px",
          gap: "6px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          theme="dark"
          size="xl"
          font="display"
          weight="normal"
          tracking="normal"
        >
          Chelsea Yangnouvong
        </Text>
        <Text
          theme="dark"
          size="base"
          color="ink-muted"
          font="display"
          weight="normal"
          tracking="wider"
        >
          FULL STACK DEVELOPER AND DESIGNER
        </Text>
      </div>
      <div style={{ width: "500px", height: "52px" }}>
        <Button theme="light" variant="emphasis">
          Hello World
        </Button>
      </div>

      <div
        style={{
          width: "500px",
          height: "52px",
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
      <div style={{ width: "500px", height: "52px" }}>
        <Button
          onClick={() => {
            setSide("left");
            setOpen(true);
          }}
        >
          Open Left
        </Button>
      </div>
      <div style={{ width: "500px", height: "52px" }}>
        <Button
          variant="outline"
          onClick={() => {
            setSide("right");
            setOpen(true);
          }}
        >
          Open Right
        </Button>
      </div>
      <Drawer
        theme="light"
        open={open}
        onClose={() => setOpen(false)}
        side={side}
        hideCloseButton={true}
      >
        <h2>Drawer content</h2>
        <p>This is coming from the {side} side.</p>
      </Drawer>
    </div>
  );
}

export default App;
