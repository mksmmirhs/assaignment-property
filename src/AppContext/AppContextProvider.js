import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext(null);
const AppContextProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('New York');
  const [filterData, setFilterData] = useState([]);
  const [uiData, setUiData] = useState([]);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        setAllData(data);

        const filter = filterDataByCity(data, 'New York');
        setFilterData(filter);
        setUiData(filter.slice(0, 6));
      });
  }, []);

  // Function to filter data by city
  const filterDataByCity = (data, city) => {
    return data.filter(property => property.city === city);
  };
  console.log(uiData);
  const contextInfo = {
    selectedFilter,
    setSelectedFilter,
    allData,
    filterData,
    setFilterData,
    uiData,
    setUiData,
    filterDataByCity,
  };
  return (
    <AppContext.Provider value={contextInfo}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
