import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Navbar from "./components/ui/Navbar";
import Vans from "./pages/Vans";
import Vandetails from "./pages/Vandetails"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<About />} /> */}
        {<Route path="/" element={<Home />} />}
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Vandetails/>}/>
      </Routes>
    </>
  );
}

export default App;
