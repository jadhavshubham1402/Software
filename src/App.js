import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import AboutPage from "./pages/About";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileDevelopment";
import CloudSolutions from "./pages/CloudSection";
import AIML from "./pages/AIML";
import UIUXDesign from "./pages/UIUXDesign";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Mobile from "./pages/Mobile";
import Cloud from "./pages/Cloud";
import Database from "./pages/Database";
import Healthcare from "./pages/HealthCare";
import Fintech from "./pages/Finetech";
import Education from "./pages/Education";
import Ecommerce from "./pages/Ecommerce";
import Logistics from "./pages/Logistics";
import Portfolio from "./pages/portfolio";
import Blogs from "./pages/Blogs";
import { useEffect } from "react";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetails";
import BlogDetail from "./pages/BlogDetails";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Common Layout */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/mobile-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/services/cloud-solutions"
            element={<CloudSolutions />}
          />
          <Route path="/services/ai-ml" element={<AIML />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/technologies/frontend" element={<Frontend />} />
          <Route path="/technologies/backend" element={<Backend />} />
          <Route path="/technologies/mobile" element={<Mobile />} />
          <Route path="/technologies/database" element={<Database />} />
          <Route path="/technologies/cloud" element={<Cloud />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/fintech" element={<Fintech />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />

          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
