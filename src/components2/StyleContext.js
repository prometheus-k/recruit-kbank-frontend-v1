import React, { createContext, useContext, useState } from 'react';

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const [isCropMode, setIsCropMode] = useState(false);

  return (
    <StyleContext.Provider value={{ isCropMode, setIsCropMode }}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyleContext = () => useContext(StyleContext);