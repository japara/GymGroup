import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Footer from "./ui/Footer";
import Header from "./ui/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes>
    </>
  );
}

export default App;
