// src/context/WardrobeContext.js
import { createContext, useContext, useState } from 'react';
import clothes from "../components/Outfit.json"
const WardrobeContext = createContext();

const initialClothes = [...clothes];



export const WardrobeProvider = ({ children }) => {
  const [clothes, setClothes] = useState(initialClothes);

  const addClothingItem = (item) => {
    setClothes((prev) => [...prev, { id: Date.now(), ...item }]);
  };

  return (
    <WardrobeContext.Provider value={{ clothes, addClothingItem }}>
      {children}
    </WardrobeContext.Provider>
  );
};

export const useWardrobe = () => useContext(WardrobeContext);
