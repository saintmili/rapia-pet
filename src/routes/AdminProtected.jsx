import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  if (!user || !user.is_admin) {
    return navigate("/", { replace: true });
  }
  return children;
};

export default AdminProtected;
