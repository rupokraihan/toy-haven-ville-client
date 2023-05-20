import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {

  const { id } = useParams();
  const [viewData, setViewData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res)=> res.json())
      .then((data) => {
        const view = data.filter((product) => product._id === id)[0];
        setViewData(view);
        setLoading(false);

      });
  }, [id]);
  if (isLoading) {
    return<LoadingSpinner/>
  }

  return (
    <div>
      <section className='my-container'>
        <img className='h-[350px] w-[450px] mx-auto rounded-xl' src={viewData.image} alt="" />

      </section>
    </div>
  );
};

export default ViewDetails;