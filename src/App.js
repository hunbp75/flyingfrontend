import SignUp from "./SignUp";

function App() {
  const handleSignUpOnSuccess = () => {
    console.log("done");
  };

  return (
    <div className="App">
      <SignUp onSuccess={handleSignUpOnSuccess} />
    </div>
  );
}

export default App;
