import Signup from "./Signup";
import Login from "./Login";
import UserContext from "./UserContext";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";
import EnglishTest from "./EnglishTest";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <UserContext>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<EnglishTest />} />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;
