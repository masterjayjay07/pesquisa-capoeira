import { Link } from "react-router-dom";
import { Container, ContainerInfos } from "./styles";
import Section1 from "../../components/section1";
import Section2 from "../../components/section2";
import mb1 from "../../images/mb1.png";
import mb2 from "../../images/mb2.png";
import mb3 from "../../images/mb3.png";
import mb4 from "../../images/mb4.jpeg";
import mb5 from "../../images/mb5.jpg";

const MestreBimbaPage = () => {
  const rules =
    "\nBimba impunha regras para os praticantes da capoeira regional, sendo elas: \n- Não beber e não fumar. Pois os mesmos alteravam o desempenho e a consciência da capoeira; \n- Evitar demonstrações de todas as técnicas, pois a surpresa é a principal arma dessa arte;\n- Praticar os fundamentos todos os dias;\n- Não dispersar durante as aulas;\n- Manter o corpo relaxado e o mais próximo do seu adversário possível, pois dessa forma a capoeira desenvolveria mais";
  return (
    <div>
      <Container>
        <h2>Mestre Bimba</h2>
        <Link to="/" children="voltar ao início" />
      </Container>
      <ContainerInfos>
        <Section1
          img={mb5}
          text="Manoel dos Reis Machado, conhecido como Mestre Bimba, foi o criador da capoeira regional, também chamada de luta regional baiana, no final da década de 1920. A partir de seus conhecimentos sobre a capoeira primitiva – capoeira Angola – e sobre a luta denominada batuque, ele foi o primeiro capoeirista de sua época a desenvolver um sistema de ensino e, também, o primeiro a dar aulas em ambiente fechado. Conquistou reconhecimento e respeito da sociedade, numa época em que a perseguição a manifestações da cultura negra era intensa"
        />
        <Section2
          img={mb4}
          text="Manoel dos Reis Machado nasceu no Engenho Velho de Brotas, em Salvador, no dia 23 de novembro de 1900. O apelido Bimba é fruto de uma aposta entre sua mãe e a parteira, sobre qual seria o sexo da criança. “Ganhei a aposta, o cabra tem bimba e cacho”, teria dito a parteira na hora do nascimento. O início na capoeira se deu aos 12 anos de idade, no aprendizado do batuque, luta considerada como uma das matrizes da capoeira. Seu primeiro mestre foi o africano Bentinho, capitão da Companhia de Navegação Baiana. Aos 18 anos, começou a dar aulas e, aos 27 anos, já era conhecido como Mestre Bimba. Além de capoeirista, foi carvoeiro, trapicheiro, carpinteiro e doqueiro (trabalhou em docas). "
        />
        <Section1
          img={mb1}
          text={`O sentimento de que a capoeira estava perdendo suas características de luta, com golpes estilizados feitos na intenção de empolgar os espectadores, é apontado como o principal motivo que levou Bimba a desenvolver uma variante da capoeira tradicional, denominada Angola. “Em 1928, eu criei, completa, a Regional, que é o batuque misturado com a Angola, com mais golpes, uma verdadeira luta, boa para o físico e para a mente”, disse Bimba, conforme relatado no livro A saga do mestre Bimba, de Raimundo Cesar Alves. Ao longo dos anos, o baiano transformou a capoeira numa luta com método de ensino próprio, criando rituais como o batizado, a formatura e a especialização.A capoeira era trabalhada em duas vertentes: como luta de defesa pessoal e como manifestação cultural e artística.“Com a Capoeira Regional, Mestre Bimba suscitou uma nova abordagem expansionista e pedagógica da capoeira: subiu no ringue, realizou apresentações, montou academia, estabeleceu aulas regulares, lições, turmas de alunos com horários preestabelecidos e uma metodologia do ensino através das sequências e jogos diferenciados”, diz Hellio Campos (Mestre Xaréu), no livro Capoeira Regional: a escola de Mestre Bimba. As variações musicais do berimbau ditam o ritmo, o tipo de jogo que será feito na roda. Na capoeira regional, isso acontece por meio de sete toques criados por Mestre Bimba. São eles: São Bento Grande, Santa Maria, Banguela, Amazonas, Cavalaria, Idalina e Iúna. ${rules}`}
        />
        <Section2
          img={mb2}
          text="Antes de Bimba, a capoeira era ilegal e discriminada como “coisa de malandro” e de escravo “fujão”. 
          Na década de 1930, Getúlio Vargas, em busca de apoio popular, passou a permitir a prática, apenas em ambientes fechados e com alvará da polícia. Assim, em 1932, Mestre Bimba fundou sua primeira academia no bairro do Engenho Velho de Brotas. Essa foi, oficialmente, a primeira academia de capoeira a ter um alvará de funcionamento, datado de 1937, registrada com o nome de Centro de Cultura Física Regional.
          Mestre Bimba desafiou lutadores e não se soube de alguma ocasião em que tenha sido derrotado.
          Levou seu grupo a diversas cidades brasileiras, apresentando a capoeira baiana. Em 1949, por exemplo, realizou em São Paulo uma série de lutas, com atletas de outras modalidades.
          Em 1953, fez uma apresentação para o então presidente Getúlio Vargas, que estava de passagem por Salvador. Na ocasião, Vargas afirmou que “a capoeira é o único esporte verdadeiramente nacional”.
          Na apresentação, o grupo de Bimba era formado por duas alas. A da percussão, com dois pandeiros e um berimbau – instrumento símbolo da capoeira e da Bahia –; e a dos capoeiristas, que se revezavam de dois em dois, com movimentos e coreografias encenando os golpes.
          A capoeira foi oficializada como prática esportiva pelo Conselho Nacional de Desportos apenas em 1972."
        />
        <Section1
          img={mb3}
          text="Em 1973, Mestre Bimba deixou a Bahia rumo a Goiânia, por motivos financeiros e por ter considerado que os “poderes públicos” não o teriam dado o devido valor.
          Um ano depois, em 5 de fevereiro de 1974, ele faleceu na capital goiana, vítima de um derrame cerebral, aos 73 anos.
          Seus familiares dizem que ele morreu por tristeza, de “banzo” – doença da nostalgia e saudade que acometia os negros escravizados.
          Mestre Bimba contribuiu para a difusão de manifestações culturais da Bahia, como o samba de roda e o maculelê.
          Deixou como herança a profissionalização, a metodologia e o respeito da sociedade pela capoeira.
          Por influência dele e de seus discípulos, a capoeira conquistou o Brasil e é praticada em diversos países do mundo.
          Em 1996, em uma homenagem póstuma, Mestre Bimba recebeu o título de Doutor Honoris Causa da Universidade Federal da Bahia.
          No mesmo ano, ganhou a maior honraria da Câmara Municipal de Salvador, a Medalha Thomé de Souza."
        />
        <p>
          Fonte:
          <a
            target="_blank"
            href="http://www.multirio.rj.gov.br/index.php/leia/reportagens-artigos/reportagens/16849-quem-foi-mestre-bimba,-criador-da-capoeira-regional"
            rel="noreferrer"
          >
            MultiRio
          </a>
        </p>
      </ContainerInfos>
    </div>
  );
};

export default MestreBimbaPage;
