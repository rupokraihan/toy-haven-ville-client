import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';
import Comment from '../comment/Comment';
import Review from '../review/Review';
import ShopByCategory from '../shop/ShopByCategory';

const Home = () => {
  return (
    <div>
      <Banner/>
      <ShopByCategory/>
      <Gallery />
      <Review/>
      <Comment/>
    </div>
  );
};

export default Home;