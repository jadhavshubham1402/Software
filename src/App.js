import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common Layout */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          {/* <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/technologies" element={<Technologies />} />

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
