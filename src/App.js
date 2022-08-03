import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Component/About";
import Header from "./Component/Header";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
