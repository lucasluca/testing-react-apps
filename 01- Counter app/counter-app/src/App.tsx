import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={SBackground}>
      <button style={{ ...SButton, marginRight: "1rem" }} onClick={decrement}>
        <span style={{ ...SButtonText }}>-</span>
      </button>
      <div className="number-show" style={SCounterDisplay}>
        <span
          className="text-number"
          style={{ ...SNumberText, userSelect: "none", fontWeight: "bold" }}
        >
          {count}
        </span>
      </div>
      <button style={{ ...SButton, marginLeft: "1rem" }} onClick={increment}>
        <span style={SButtonText}>+</span>
      </button>
    </div>
  );
}

export default App;

const SBackground = {
  backgroundColor: "#D6E8FC",
  display: "flex",
  height: "100vh",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center",
};

const SCounterDisplay = {
  backgroundColor: "#0F73E3",
  height: "5rem",
  width: "5rem",
  borderRadius: "0.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const SNumberText = {
  color: "#FFF",
  fontSize: "2rem",
};

const SButton = {
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "2rem",
  height: "2rem",
  width: "2rem",
  color: "#2F81E2",
};

const SButtonText = {
  height: "2rem",
  display: "flex",
  alignItems: "center",
};
