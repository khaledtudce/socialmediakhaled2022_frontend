import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
