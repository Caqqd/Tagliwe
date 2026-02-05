import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';
import ReviewSlider from '../components/ReviewSlider';

const Home = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => { axios.get('/api/reviews').then(res => setReviews(res.data)); }, []);

  const services = [
    { name: 'Wedding Planning', description: 'Full wedding services.' },
    { name: 'Birthday Party', description: 'Fun birthday events.' },
    // Add more
  ];

  return (
    <div>
      <Header />
      <HeroBanner />
      <section className="py-10"><h2>Services</h2><div className="grid grid-cols-3 gap-4">{services.map(s => <ServiceCard key={s.name} service={s} />)}</div></section>
      <ReviewSlider reviews={reviews} />
      <Footer />
    </div>
  );
};

export default Home;