import { useEffect, useCallback, useRef } from "react";
import { userContext } from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Google.scss";

const Google = () => {
  const { login } = useContext(userContext);
  const navigate = useNavigate();
  const popup = useRef(null);
  const openPopup = useCallback(() => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = "http://localhost:3000/api/google";

    popup.current = window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );
  }, []);

  useEffect(() => {
    const listener = (event) => {
      const data = event.data;
      if (typeof data === "string") {
        const parsed = JSON.stringify(data);
        login(parsed);
        popup.current?.close();
        navigate("/");
      }
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  return (
    <div>
      <button onClick={openPopup} className="google-button">
        Login with Google
      </button>
    </div>
  );
};

export default Google;
