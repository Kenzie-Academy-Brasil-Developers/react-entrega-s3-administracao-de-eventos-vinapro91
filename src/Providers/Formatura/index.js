import { createContext, useState } from "react";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [formaturaList, setFormaturaList] = useState([]);

  const addToFormaturaList = (item) => {
    setFormaturaList([...formaturaList, item]);
  };

  const removeToFormaturaList = (item) => {
    const newList = formaturaList.filter(
      (itemRemoved) => itemRemoved.name !== item.name
    );
    setFormaturaList(newList);
  };

  return (
    <FormaturaContext.Provider
      value={{ formaturaList, addToFormaturaList, removeToFormaturaList }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
