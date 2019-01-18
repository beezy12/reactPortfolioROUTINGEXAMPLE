import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h1>a thing Ive done</h1>
    <p>this is the page with an Id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;