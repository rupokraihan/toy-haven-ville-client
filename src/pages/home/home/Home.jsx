import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';
import Comment from '../comment/Comment';
import Review from '../review/Review';

const Home = () => {
  return (
    <div>
      <Banner/>
      <h1>this is home</h1>
      <Gallery />
      <Review/>
      <Comment/>
    </div>
  );
};

export default Home;