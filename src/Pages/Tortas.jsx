import { useEffect, useState } from "react";
import SubHeadingTitle from "../components/ItemListContainer/ItemListContainer";
import CardUser from "../components/CardUser/CardUser";
import UserSection from "../components/UserSection/UserSection.jsx";
import MainLayout from "../layout/Main.jsx";

const Tortas = () => {
      const [info, setInfo] = useState([]);
      useEffect(() => {
        async function traerProductos() {
          await fetch("./api/notre.json")
            .then((res) => res.json())
            .then((data) => setInfo(data));
        }
        async function fetchCakes() {}
        traerProductos();
      }, []);

      return (
        <MainLayout>
          <SubHeadingTitle title="Tortas" />
            {info.length && (
                <UserSection>
                    {info.map((item, index) => (
                        <CardUser
                            href={`/producto/${index}`}
                            id={index}
                            featured={item.featured}
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


export default Tortas;
