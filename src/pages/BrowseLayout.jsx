import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const BrowseLayout = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <Outlet />
    </div>
  );
};

export default BrowseLayout;
