import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./component/Layout";
import AboutPage from "./pages/About";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileDevelopment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common Layout */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-development" element={<MobileAppDevelopment />} />
          {/*



          <Route path="/industries" element={<Industries />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route path="/contact" element={<Contact />} />
          
          {/* 404 */}
          {/* <Route path="*" element={<NotFound />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
