import Button from "./components/Button/Button";
import "./styles/global.css";

function App() {
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
    </div>
  );
}

export default App;
