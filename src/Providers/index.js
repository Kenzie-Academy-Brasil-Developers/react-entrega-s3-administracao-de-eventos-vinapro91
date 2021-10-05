import { CasamentProvider } from "./Casamento";
import { ConfraternizacaoProvider } from "./Confraternizacao";
import { DrinkProvider } from "./Drinks";
import { FormaturaProvider } from "./Formatura";

const Providers = ({ children }) => {
  return (
    <DrinkProvider>
      <CasamentProvider>
        <ConfraternizacaoProvider>
          <FormaturaProvider>{children}</FormaturaProvider>
        </ConfraternizacaoProvider>
      </CasamentProvider>
    </DrinkProvider>
  );
};
export default Providers;
