import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";
import ActivateAccount from "./pages/auth/activateaccount";
import NewPassword from "./pages/auth/newpassword";
import Recovery from "./pages/auth/recovery";
import AccountCreated from "./pages/auth/accountCreated";
import Home from "./pages/main/home/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/v1/home" replace />} />
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />{" "}
            <Route path="created" element={<AccountCreated />} />
            <Route path="activate/:email" element={<ActivateAccount />} />
            <Route path="newpass/:email" element={<NewPassword />} />
            <Route path="recovery" element={<Recovery />} />
          </Route>
          <Route path="/v1">
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
