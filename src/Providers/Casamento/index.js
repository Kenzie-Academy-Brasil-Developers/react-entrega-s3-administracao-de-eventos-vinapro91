import { createContext, useState } from "react";
export const CasamentoContext = createContext([]);

export const CasamentProvider = ({ children }) => {
  const [casamentoLista, setCasamentoLista] = useState([]);

  const addToCasamentoList = (item) => {
    setCasamentoLista([...casamentoLista, item]);
  };

  const removeToCasamentoList = (item) => {
    const newList = casamentoLista.filter(
      (itemRemoved) => itemRemoved.name !== item.name
    );
    setCasamentoLista(newList);
  };

  return (
    <CasamentoContext.Provider
      value={{
        casamentoLista,
        addToCasamentoList,
        removeToCasamentoList,
      }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
