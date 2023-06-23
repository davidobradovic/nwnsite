import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Apply from "./screens/Apply";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-for-ambassador" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
