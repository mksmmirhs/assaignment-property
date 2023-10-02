import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext(null);
const AppContextProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('New York');
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setAllData(data));
  }, []);
  const contextInfo = {
    selectedFilter,
    setSelectedFilter,
    allData,
  };
  return (
    <AppContext.Provider value={contextInfo}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
