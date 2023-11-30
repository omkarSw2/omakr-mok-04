import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.SignUpReducer);
  //   console.log(isAuth);
  if (!isAuth) {
    return navigate("/sign-in");
  } else {
    return children;
  }
};

export default PrivateRoute;
