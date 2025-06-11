import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../pages/Footer";

const MainLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />  {/* This renders the child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;