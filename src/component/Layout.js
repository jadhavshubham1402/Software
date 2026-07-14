import { Outlet } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;