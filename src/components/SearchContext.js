// SearchContext.js
import React, { createContext, useContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobGroup, setSelectedJobGroup] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('');
  
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, selectedJobGroup, setSelectedJobGroup, selectedCareer, setSelectedCareer }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};