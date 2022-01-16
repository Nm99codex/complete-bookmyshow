import React from 'react';
import Header from '../components/Header';

function HomeLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default HomeLayout;