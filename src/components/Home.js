import React from 'react';
import Filters from './Filters';
import Card from './Card';

const Home = () => {
  return (
    <div className="">
      <div>
        <Filters></Filters>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
