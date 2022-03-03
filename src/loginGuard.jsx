import { useContext, useEffect } from "react";
import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const loginGuard = (Component) => {
  const Guarded = (props) => {
    const navigate = useNavigate();
    //Guarded egy subkomponens vgay gyerek komponens
    const { user } = useContext(userContext);

    useEffect(() => {
      if (!user) {
        navigate("/");
      }
    }, [navigate, user]);

    if (user) {
      //ha nincsen user azaz nem vagyok bejelentkezve akkor a lenti komponenst nem jeleníti meg
      return <Component {...props} user={user} />;
    }
    return null;
  };

  return Guarded;
};

export default loginGuard;
