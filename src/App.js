import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sport from "./components/Sport";
import Travel from "./components/Travel";
import Concert from "./components/Concert";
import Business from "./components/Business";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProfilePage from "./pages/profile/profile.page";
import { AuthGuard } from "./guards/auth.guard";
import { Role } from "./models/role";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/profile"
          element={
            <AuthGuard roles={[Role.USER, Role.ADMIN]}>
              <ProfilePage />
            </AuthGuard>
          }
        ></Route>
        <Route path="/sport/*" element={<Sport />}></Route>
        <Route path="/travel/*" element={<Travel />}></Route>
        <Route path="/concert/*" element={<Concert />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
