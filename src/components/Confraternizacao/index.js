import { useContext } from "react";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { BangIcon, Container, DivBang, List } from "./styles";

const Confraternizacao = () => {
  const { confraternizacaoList, removeToConfratList } = useContext(
    ConfraternizacaoContext
  );

  return (
    <Container>
      <List>
        {confraternizacaoList.map((item, index) => (
          <li key={index}>
            <img alt={item.name} src={item.image_url} />
            <p>
              <strong>Nome:</strong> {item.name}
            </p>
            <p>
              <strong>Data Inicio de fabricação:</strong> {item.first_brewed}
            </p>
            <DivBang>
              <strong>Descrição</strong>
              <BangIcon title={item.description}>!</BangIcon>
            </DivBang>
            <p>
              <strong> Quantidade de litro:</strong> {item.volume.value} Litros
            </p>
            <button onClick={() => removeToConfratList(item)}>
              {" "}
              Remover Item
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Confraternizacao;
