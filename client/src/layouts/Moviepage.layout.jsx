import React from 'react';
import Header from '../components/Header';

function MovieLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default MovieLayout;