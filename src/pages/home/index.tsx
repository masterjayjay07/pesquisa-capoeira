import { useState } from "react";
import { CardsContainer, FooterContainer } from "./styles";
import Card from "../../components/card";
import Header from "../../components/header";
import mestre_bimba from "../../images/Mestre_Bimba1.png";
import maria_filipa from "../../images/maria-filipa.jpg";

const HomePage = () => {
  const [characters] = useState([
    { name: "Mestre Bimba", img: mestre_bimba, path: "/mestrebimba" },
    { name: "Maria Filipa", img: maria_filipa, path: "/mariafilipa" },
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
      <FooterContainer>
        <div>
          <p>
            Pesquisa feita pela:{"  "}
            <a
              target="_blank"
              href="https://www.instagram.com/ass.de_capoeira_sao_bento/?hl=en"
              rel="noreferrer"
            >
              Associação de capoeira são Bento
            </a>
          </p>
        </div>
        <div>
          <p>
            Criador do site:{"  "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/johaopedro1500/"
              rel="noreferrer"
            >
              Johão Pedro Vargas
            </a>
          </p>
        </div>
      </FooterContainer>
    </div>
  );
};

export default HomePage;
