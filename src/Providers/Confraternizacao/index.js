import { createContext, useState } from "react";

export const ConfraternizacaoContext = createContext([]);

export const ConfraternizacaoProvider = ({ children }) => {
  const [confraternizacaoList, setConfraternizacaoList] = useState([]);

  const addToConfratList = (item) => {
    setConfraternizacaoList([...confraternizacaoList, item]);
  };

  const removeToConfratList = (item) => {
    const newList = confraternizacaoList.filter(
      (itemRemoved) => itemRemoved.name !== item.name
    );
    setConfraternizacaoList(newList);
  };

  return (
    <ConfraternizacaoContext.Provider
      value={{ confraternizacaoList, addToConfratList, removeToConfratList }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
