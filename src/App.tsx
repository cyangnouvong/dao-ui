import { useState } from "react";
import Button from "./components/Button/Button";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import Drawer from "./components/Drawer/Drawer";
import Text from "./components/Text/Text";
import Tooltip from "./components/Tooltip/Tooltip";
import "./styles/global.css";
import DotIndicator from "./components/DotIndicator/DotIndicator";
import { ToastProvider } from "./components/Toast/Toast";
import TestToast from "./TestToast";
import Badge from "./components/Badge/Badge";
import Input from "./components/Input/Input";

function App() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"left" | "right">("right");
  const [activeDot, setActiveDot] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ToastProvider theme={theme}>
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
          <Text size="xl" font="display" weight="normal" tracking="normal">
            Chelsea Yangnouvong
          </Text>
          <Text
            size="base"
            color="ink-muted"
            font="display"
            weight="normal"
            tracking="wider"
          >
            FULL STACK DEVELOPER AND DESIGNER
          </Text>
        </div>

        <Tooltip label="View on GitHub" placement="top">
          <div
            style={{
              width: "300px",
              height: "52px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button variant="primary">Source</Button>
          </div>
        </Tooltip>

        <DotIndicator
          count={3}
          active={activeDot}
          onChange={setActiveDot}
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
          <TestToast />
          <div style={{ width: "500px", height: "52px" }}>
            <Button variant="emphasis" showArrow={true}>
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
            options={[
              { label: "Light", value: "light" },
              { label: "Dark", value: "dark" },
            ]}
            value={theme}
            onChange={(val) => setTheme(val)}
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
        <div
          style={{
            width: "500px",
            height: "52px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Badge variant="outline" size="md">
            Badge
          </Badge>
          <Badge variant="subtle" size="md">
            Badge
          </Badge>
          <Badge variant="solid" size="md">
            Badge
          </Badge>
        </div>
        <div
          style={{
            width: "500px",
            height: "300px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Input
            variant="outline"
            label="test input"
            placeholder="This is a placeholder"
            helperText="helper text here"
            size="md"
          />
        </div>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          side={side}
          hideCloseButton={true}
        >
          <h2>Drawer content</h2>
          <p>This is coming from the {side} side.</p>
        </Drawer>
      </div>
    </ToastProvider>
  );
}

export default App;
