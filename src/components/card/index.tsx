import { ICardInfo } from "../../interfaces";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Card = ({ name, img, path }: ICardInfo) => {
  return (
    <Container>
      <div>
        <img src={img} alt="img" />
        <Link to={path}>{name}</Link>
      </div>
    </Container>
  );
};

export default Card;
