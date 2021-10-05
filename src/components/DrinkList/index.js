import { useContext, useState } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { DrinkContext } from "../../Providers/Drinks";
import { FormaturaContext } from "../../Providers/Formatura";
import { BangIcon, Container, DivBang, List } from "./styles";

const DrinkList = () => {
  const { drinks } = useContext(DrinkContext);
  const { addToCasamentoList } = useContext(CasamentoContext);
  const { addToFormaturaList } = useContext(FormaturaContext);
  const { addToConfratList } = useContext(ConfraternizacaoContext);

  return (
    <Container>
      <List>
        {drinks.map((item, index) => (
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
            <button onClick={() => addToCasamentoList(item)}>Casamento</button>
            <button onClick={() => addToFormaturaList(item)}>Formatura</button>
            <button onClick={() => addToConfratList(item)}>
              Confraternização
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default DrinkList;
