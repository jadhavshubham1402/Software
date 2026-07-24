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
import HealthTech from "./pages/industries/HealthTech";
import Automotive from "./pages/industries/Automotive";
import RetailEcommerce from "./pages/industries/RetailEcommerce";
import Manufacturing from "./pages/industries/Manufacturing";
import MediaEntertainment from "./pages/industries/MediaEntertainment";
import TravelHospitality from "./pages/industries/TravelHospitality";
import Portfolio from "./pages/portfolio";
import Blogs from "./pages/Blogs";
import { useEffect } from "react";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetails";
import BlogDetail from "./pages/BlogDetails";
import SupportMaintenance from "./pages/SupportMaintaince";
import SolutionDetails from "./pages/SolutionDetails";

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
          <Route path="/solutions/:slug" element={<SolutionDetails />} />

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
          <Route
            path="/services/support-maintenance"
            element={<SupportMaintenance />}
          />
          <Route path="/technologies/frontend" element={<Frontend />} />
          <Route path="/technologies/backend" element={<Backend />} />
          <Route path="/technologies/mobile" element={<Mobile />} />
          <Route path="/technologies/database" element={<Database />} />
          <Route path="/technologies/cloud" element={<Cloud />} />
          <Route path="/industries/health-tech" element={<HealthTech />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
          <Route path="/industries/travel-hospitality" element={<TravelHospitality />} />
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
