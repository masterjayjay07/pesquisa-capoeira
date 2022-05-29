import { Container } from "./styles";
import { ISectionInfo } from "../../interfaces";

const Section2 = ({ text, img }: ISectionInfo) => {
  return (
    <Container>
      <div>
        <img alt="img" src={img} />
      </div>
      <div>{text}</div>
    </Container>
  );
};

export default Section2;
