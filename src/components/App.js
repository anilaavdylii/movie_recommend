import Header from "./Header";
import { useState } from "react";
import Movie from "./Movies";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <Movie theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
