import { Container } from "./styles";
import { ISectionInfo } from "../../interfaces";

const Section1 = ({ text, img }: ISectionInfo) => {
  return (
    <Container>
      <div>{text}</div>
      <div>
        <img alt="img" src={img} />
      </div>
    </Container>
  );
};

export default Section1;
