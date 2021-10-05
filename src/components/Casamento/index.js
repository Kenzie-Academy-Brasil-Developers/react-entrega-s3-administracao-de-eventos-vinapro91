import { useContext, useState } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { BangIcon, Container, DivBang, List } from "./styles";

const Casamento = () => {
  const { removeToCasamentoList, casamentoLista } =
    useContext(CasamentoContext);

  return (
    <Container>
      <List>
        {casamentoLista.map((item, index) => (
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
            <button onClick={() => removeToCasamentoList(item)}>
              Remover Item
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Casamento;
