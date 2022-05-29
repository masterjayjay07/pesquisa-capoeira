import { Link } from "react-router-dom";
import { Container, ContainerInfos } from "./styles";
import Section1 from "../../components/section1";
import Section2 from "../../components/section2";
import mf1 from "../../images/mf1.jpg";
import mf2 from "../../images/mf2.jpg";
import mf3 from "../../images/mf3.png";

const MariaFilipaPage = () => {
  return (
    <div>
      <Container>
        <h2>Maria Filipa</h2>
        <Link to="/" children="voltar ao início" />
      </Container>
      <ContainerInfos>
        <Section1
          img={mf1}
          text="Maria Filipa de Oliveira (data desconhecida - 1873), morava na Ilha de Itaparica. “Era negra, escrava liberta, vivia junto com outros tantos libertos, homens e mulheres, de catar mariscos, fazer pão preparar quitutes, vendidos nas feiras locais ou nas proximidades de lojas de secos e molhados”.
          Ela acabou se envolvendo na luta contra as tropas portuguesas porque estas atrapalhavam as atividades e queriam ocupar pontos estratégicos da ilha. “Filipa e os grupos de negros e homens livres ‘ganhadeiros’, como se dizia, precisavam defender seu ganha-pão diário”.
          Conhecida por ser uma mulher muito alta e de grande força física, Maria Filipa teria liderado um grupo de 200 pessoas, que usavam facas de cortar baleia, peixeiras, pedaços de pau e galhos com espinhos como armas. Um dos feitos do grupo foi ter queimado 40 embarcações portuguesas que estavam próximas à Ilha."
        />
        <Section2
          img={mf2}
          text="Sobre a personagem, há uma narrativa ficcional por vezes vista como fato histórico. Diz a lenda que Maria Filipa liderou um grupo para lutar contra os soldados portugueses: com o apoio de homens da cidade, queimou inúmeras embarcações portuguesas, diminuindo o poderio colonizador no decorrer da batalha, e depois, enfrentou os portugueses usando folhas de cansanção, uma folha típica da região, que em contato com a pele dá a sensação de queimação; e toda a ação resultou em uma queda no número de soldados da tropa portuguesa. A história foi criada pelo escritor baiano Ubaldo Osório Pimentel, avô do romancista João Ubaldo Ribeiro, e permanece ainda hoje no imaginário popular."
        />
        <Section1
          img={mf3}
          text="Em 26 de julho de 2018 foi declarada Heroína da Pátria Brasileira pela Lei Federal nº 13.697, tendo seu nome inscrito no 'Livro dos Heróis e Heroínas da Pátria', que se encontra no 'Panteão da Pátria e da Liberdade Tancredo Neves', situado em Brasília, Distrito Federal."
        />
        <p>
          Fonte:
          <a
            target="_blank"
            href="https://pt.wikipedia.org/wiki/Maria_Filipa_de_Oliveira"
            rel="noreferrer"
          >
            Wikipédia
          </a>
        </p>
      </ContainerInfos>
    </div>
  );
};

export default MariaFilipaPage;
