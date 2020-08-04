import React from 'react';

import Header from './header';
import Articles from './articles';
import Accessory from './accessory';
import Footer from './footer';

function Blog() {
  return (
    <div className="boll_b">
      <div className="container">
        <Header />
        <Articles />
        <Footer />
      </div>
      <Accessory />
    </div>
  );
}

export default Blog;
