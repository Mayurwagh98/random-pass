import { useNavigate } from "react-router-dom";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("randomToken")) navigate("/login");
    else navigate("/");
  }, []);
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
