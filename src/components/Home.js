import React, { useContext } from 'react';
import Filters from './Filters';
import Card from './Card';
import { AppContext } from '../AppContext/AppContextProvider';
import { GiSandsOfTime } from 'react-icons/gi';

const Home = () => {
  const { uiData } = useContext(AppContext);
  return (
    <div className="">
      <div>
        <Filters></Filters>
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        {uiData.map(property => (
          <Card key={property.id} property={property}></Card>
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <button className="bg-[#4035e0] rounded-full text-white p-4 h-[40px] flex items-center justify-center gap-2">
          <GiSandsOfTime></GiSandsOfTime>
          Show More
        </button>
      </div>
    </div>
  );
};

export default Home;
