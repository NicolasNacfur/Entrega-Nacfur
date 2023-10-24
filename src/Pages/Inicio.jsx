import { useEffect, useState } from "react";
import SubHeadingTitle from "../components/ItemListContainer/ItemListContainer";
import CardUser from "../components/CardUser/CardUser";
import UserSection from "../components/UserSection/UserSection.jsx";
import MainLayout from "../layout/Main.jsx";

const Inicio = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function traerProductos() {
      await fetch("./api/featured.json")
        .then((res) => res.json())
        .then((data) => setInfo(data));
    }
    async function fetchCakes() {}
    traerProductos();
  }, []);

  return (
    <MainLayout>
      <SubHeadingTitle title="Nuestras tortas mas vendidas" />
        {info.length && (
            <UserSection>
                {info.map((item, index) => (
                    <CardUser
                        href={`/feature/${index}`}
                        key={index}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </UserSection>
        )}
    </MainLayout>
  );
};

export default Inicio;
