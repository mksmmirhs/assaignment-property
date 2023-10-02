import React from 'react';
import FilterButton from './FilterButton';

const Filters = () => {
  const cityName = ['New York', 'Mumbai', 'Paris', 'London'];
  return (
    <div className="flex gap-4 my-4">
      {cityName.map((city, index) => (
        <FilterButton key={index} cityName={city}></FilterButton>
      ))}
      <div className="flex grow justify-end">
        <button className="border border-[#4035e0] p-4 rounded-full text-[#4035e0] h-[40px] flex items-center justify-center ">
          View All &rarr;
        </button>
      </div>
    </div>
  );
};

export default Filters;
