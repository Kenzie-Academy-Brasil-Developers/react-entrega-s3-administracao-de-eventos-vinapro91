import * as React from "react";

import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { CasamentoContext } from "../../Providers/Casamento";
import { FormaturaContext } from "../../Providers/Formatura";
import { Container, RedBall, Content } from "./styled";

const ButtonAppBar = () => {
  const { confraternizacaoList } = useContext(ConfraternizacaoContext);
  const { casamentoLista } = useContext(CasamentoContext);

  const { formaturaList } = useContext(FormaturaContext);

  return (
    <Container>
      <Button color="inherit">
        <Link to="/">Home</Link>
      </Button>

      <Button color="inherit">
        <Content>
          <Link to="casamento">Casamento</Link>
          <RedBall>
            {casamentoLista.length !== 0 && casamentoLista.length}
          </RedBall>
        </Content>
      </Button>
      <Button color="inherit">
        <Content>
          <Link to="formatura">Formatura</Link>
          <RedBall>
            {formaturaList.length !== 0 && formaturaList.length}
          </RedBall>
        </Content>
      </Button>
      <Button color="inherit">
        <Content>
          <Link to="confra">Confraternização</Link>
          <RedBall>
            {confraternizacaoList.length !== 0 && confraternizacaoList.length}
          </RedBall>
        </Content>
      </Button>
    </Container>
  );
};
export default ButtonAppBar;
