import { Outlet } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;