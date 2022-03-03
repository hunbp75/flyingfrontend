import UserForm from "./UserForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Google from "./Google";

const signup = (email, password) => {
  let status = true;

  return fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        status = false;
      }
      return res;
    })
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      if (status) {
        return info;
      }
      throw info;
    });
};

const Signup = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (email, password) => {
    setError(null);
    setLoading(true);
    signup(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      {error ? <p>{error?.message ?? "unknow error"}</p> : null}
      <UserForm
        onSubmit={handleSignup}
        loading={loading}
        title="Registration"
      />
      <Google />
    </div>
  );
};

export default Signup;
