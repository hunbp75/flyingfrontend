import UserForm from "./UserForm";

const signup = (email, password) => {
  return fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.json();
  });
};

const SignUp = (props) => {
  const handleSignUp = (email, password) => {
    signup(email, password).then(() => {
      props.onSuccess();
    });
  };
  return (
    <div>
      <UserForm onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUp;
