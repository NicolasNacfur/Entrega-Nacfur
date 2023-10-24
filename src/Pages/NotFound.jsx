import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../layout/Main.jsx";
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <MainLayout>
      <h1>Error 404</h1>
      <p>Volviendo a inicio en 5 segundos</p>
    </MainLayout>
  );
};

export default NotFound;
