import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="container mx-auto bg-[#f5f4fd] p-4 ">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
