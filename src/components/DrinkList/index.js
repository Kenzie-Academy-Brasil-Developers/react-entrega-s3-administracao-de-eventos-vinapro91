import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { DrinkContext } from "../../Providers/Drinks";
import { FormaturaContext } from "../../Providers/Formatura";
import {
  BangIcon,
  Button,
  Container,
  DivBang,
  List,
  PositionButtons,
} from "./styles";

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
            <PositionButtons>
              <Button onClick={() => addToCasamentoList(item)}>
                Casamento
              </Button>
              <Button onClick={() => addToFormaturaList(item)}>
                Formatura
              </Button>
              <Button onClick={() => addToConfratList(item)}>
                Confraternização
              </Button>
            </PositionButtons>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default DrinkList;
