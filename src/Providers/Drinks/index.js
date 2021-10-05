import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
export const DrinkContext = createContext([]);

export const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const requestApi = () => {
    api.get().then((response) => setDrinks(response.data));
  };
  useEffect(() => {
    requestApi();
    // eslint-disable-next-line
  }, []);
  return (
    <DrinkContext.Provider value={{ drinks, setDrinks }}>
      {children}
    </DrinkContext.Provider>
  );
};
