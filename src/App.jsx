import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {

  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
