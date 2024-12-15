import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import AdminPanel from "./pages/ProtectedPages/AdminPanel";
import AdminDashboard from "./pages/ProtectedPages/AdminDashboard";
import AdminAutLayout from "./pages/ProtectedPages/AdminAutLayout";

function App() {
  return (
    <>
      <Routes>

        <Route element={<AdminAutLayout />}>
          <Route path="/admin" element={<AdminPanel />}/>
          <Route path="/admin/dashboard" element={<AdminDashboard />}/>
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
