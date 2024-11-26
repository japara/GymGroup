import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
