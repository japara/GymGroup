import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Footer/>}/>
      </Routes>
    </>
  );
}

export default App;
