import React from "react";
import { CounterPage } from "./components/CounterPage";

const App = () => {
  return (
    <div>
      <CounterPage initialCount={10} />
    </div>
  );
};

export default App;
