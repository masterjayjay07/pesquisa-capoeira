import { useState } from "react";
import { CardsContainer } from "./styles";
import Card from "../../components/card";
import Header from "../../components/header";
import mestre_bimba from "../../images/Mestre_Bimba1.png";

const HomePage = () => {
  const [characters] = useState([
    { name: "Mestre Bimba", img: mestre_bimba, path: "/mestrebimba" },
    { name: "Maria Filipa", img: "#", path: "mariafilipa" },
  ]);
  return (
    <div>
      <Header />
      <CardsContainer>
        {characters.map((element, index) => (
          <Card
            name={element.name}
            img={element.img}
            path={element.path}
            key={index}
          />
        ))}
      </CardsContainer>
    </div>
  );
};

export default HomePage;
