import React from 'react';

const ServiceCard = ({ service }) => (
  <div className="bg-white p-4 shadow-md rounded">
    <h3 className="text-lg font-bold">{service.name}</h3>
    <p>{service.description}</p>
  </div>
);

export default ServiceCard;