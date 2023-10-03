import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext/AppContextProvider';
import Card from './Card';

const DetailsPage = () => {
  const [details, setDetails] = useState([]);
  const { allData } = useContext(AppContext);
  const { id } = useParams();
  useEffect(() => {
    const detailsData = allData.filter(property => property.id === id)[0];
    setDetails(detailsData);
  }, [allData, id]);

  return (
    <div>
      <Card property={details}></Card>
    </div>
  );
};

export default DetailsPage;
