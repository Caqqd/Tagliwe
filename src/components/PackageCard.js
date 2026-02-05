import React from 'react';

const PackageCard = ({ pkg }) => (
  <div className="bg-white p-4 shadow-md rounded">
    <h3 className="text-lg font-bold">{pkg.name} - {pkg.price}৳</h3>
    <p>{pkg.description}</p>
    <ul>{pkg.includes.map(item => <li key={item}>{item}</li>)}</ul>
  </div>
);

export default PackageCard;