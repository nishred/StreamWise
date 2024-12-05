import {Outlet} from "react-router-dom"
import ReactDOM from "react-dom";

const LoginLayout = () => {
  return (
    <div className="relative flex justify-center">
      {ReactDOM.createPortal(
        <img
          className="absolute w-48 left-44 shadow-xl shadow-slate-900 z-50"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />,
        document.getElementById("root")
      )}
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/US-en-20241202-TRIFECTA-perspective_0205969b-6ba1-45f4-947b-8949317cfe29_small.jpg" />

      <Outlet />
    </div>
  );
};

export default LoginLayout;
