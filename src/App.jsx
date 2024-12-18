import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import AdminPanelLayout from "./pages/AdminPanel/AdminPanelLayout";
import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
import AdminAut from "./pages/AdminPanel/AdminAut";
import AdminBlogs from "./pages/AdminPanel/AdminBlogs";
import AdminAboutMe from "./pages/AdminPanel/AdminAboutMe";
import AdminServices from "./pages/AdminPanel/AdminServices";

function App() {
  return (
    <>
      <Routes>

        <Route path="/admin" element={<AdminPanelLayout />}>
          <Route  index element={<AdminAut />} />
          <Route  path="/admin/dashboard" element={<AdminDashboard />} />
          <Route  path="/admin/blogs" element={<AdminBlogs />} />
          <Route  path="/admin/aboutme" element={<AdminAboutMe />} />
          <Route  path="/admin/services" element={<AdminServices />} />
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
