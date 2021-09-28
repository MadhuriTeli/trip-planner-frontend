import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "http://localhost:8080/destinations";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            id,
            title,
            address,
            pincode,
            city,
            state,
            visiting_hours,
            visiting_fee,
            description,
            picture,
            image,
          } = item;

          return {
            id: id,
            title: title,
            address: address,
            pincode: pincode,
            city: city,
            state: state,
            visiting_hours: visiting_hours,
            visiting_fee: visiting_fee,
            description: description,
            picture: picture,
            image: image,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };