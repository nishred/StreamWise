import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);

  const { isAuthenticated } = user;

  console.log("User in protected Route", user);

  if (isAuthenticated) return children;
  else return <Navigate to={"/signup"} />;
};

export default ProtectedRoute;
