import Container from "./containers/container";
import { Routes, Route } from "react-router-dom";
import GenerateCode from "./pages/auth/generateCode";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard/dashboard";
import UpdateMobile from "./pages/user/updateMobile";

const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<GenerateCode />} />
          <Route path="/editMobile" element={<UpdateMobile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
