import { useState } from "react";
import Button from "./components/Button/Button";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import Drawer from "./components/Drawer/Drawer";
import Text from "./components/Text/Text";
import Tooltip from "./components/Tooltip/Tooltip";
import "./styles/global.css";
import DotIndicator from "./components/DotIndicator/DotIndicator";

function App() {
  const [value, setValue] = useState("option1");
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"left" | "right">("right");
  const [activeDot, setActiveDot] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <div
      data-theme={theme}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "16px",
        flexWrap: "wrap",
        background: theme === "light" ? "#dfdfd6" : "#1a1a17",
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
          theme={theme}
          size="xl"
          font="display"
          weight="normal"
          tracking="normal"
        >
          Chelsea Yangnouvong
        </Text>
        <Text
          theme={theme}
          size="base"
          color="ink-muted"
          font="display"
          weight="normal"
          tracking="wider"
        >
          FULL STACK DEVELOPER AND DESIGNER
        </Text>
      </div>

      <Tooltip label="View on GitHub" placement="top" theme={theme}>
        <div
          style={{
            width: "300px",
            height: "52px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button variant="primary" theme={theme}>
            Source
          </Button>
        </div>
      </Tooltip>

      <DotIndicator
        count={3}
        active={activeDot}
        onChange={setActiveDot}
        theme={theme}
        size="lg"
      />

      <div
        style={{
          width: "500px",
          height: "52px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "500px", height: "52px" }}>
          <Button theme={theme} variant="emphasis">
            Hello World
          </Button>
        </div>
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
          theme={theme}
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
          theme={theme}
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
          theme={theme}
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
        theme={theme}
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
