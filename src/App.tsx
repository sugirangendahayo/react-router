import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Navbar from "./components/ui/Navbar";
import Vans from "./pages/Vans";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<About />} /> */}
        {<Route path="/" element={<Home />} />}
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </>
  );
}

export default App;
