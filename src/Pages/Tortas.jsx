import { useEffect, useState } from "react";
import SubHeadingTitle from "../components/ItemListContainer/ItemListContainer";
import CardUser from "../components/CardUser/CardUser";
import UserSection from "../components/UserSection/UserSection.jsx";
import MainLayout from "../layout/Main.jsx";
import FilterGadget from "../components/FilterWidget/FilterWidget";

const Tortas = () => {
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState('all'); 

  useEffect(() => {
    async function traerProductos() {
      await fetch("./api/notre.json")
        .then((res) => res.json())
        .then((data) => setInfo(data));
    }
    
    // Fetch data
    traerProductos();
  }, []);


  const filteredInfo = info.filter((item) => {
    if (filter === 'all') {
      return true; 
    } else {
      return item.category === filter;
    }
  });

  return (
    <MainLayout>
      <SubHeadingTitle title="Tortas" />


      <div>
        <label htmlFor="category">Tipos de Tortas</label>
        <select
          category="category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Tradicional</option>
          <option value="category1">Vegetarianas</option>
          <option value="category2">Aptas Celiaquia</option>
        </select>
      </div>

      {filteredInfo.length ? (
        <UserSection>
          {filteredInfo.map((item, index) => (
            <CardUser
              href={`/producto/${index}`}
              id={index}
              category={item.category}
              featured={item.featured}
              key={index}
              img={item.img}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </UserSection>
      ) : (
        <p>No products found for the selected category.</p>
      )}
    </MainLayout>
  );
};

export default Tortas;
