import React, { useContext } from 'react';
import { AppContext } from '../AppContext/AppContextProvider';

const FilterButton = ({ cityName }) => {
  const {
    selectedFilter,
    setSelectedFilter,
    filterDataByCity,
    allData,
    setFilterData,
    setUiData,
  } = useContext(AppContext);
  const clickedFilterHandler = () => {
    setSelectedFilter(cityName);
    const filter = filterDataByCity(allData, cityName);
    setFilterData(filter);
    setUiData(filter.slice(0, 6));
  };
  return (
    <div>
      <button
        onClick={clickedFilterHandler}
        className={
          selectedFilter === cityName
            ? 'bg-[#4035e0] rounded-full text-white p-4 h-[40px] flex items-center justify-center'
            : 'bg-[#ebebfb] rounded-full p-4 h-[40px] flex items-center justify-center'
        }
      >
        {cityName}
      </button>
    </div>
  );
};

export default FilterButton;
