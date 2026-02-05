import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [form, setForm] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/bookings', form);
    alert('Booking submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input type="tel" placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
      <select onChange={(e) => setForm({ ...form, eventType: e.target.value })} required>
        <option>Wedding</option><option>Birthday</option><option>Corporate</option>
      </select>
      <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      <input type="text" placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} required />
      <input type="number" placeholder="Budget" onChange={(e) => setForm({ ...form, budget: e.target.value })} required />
      <select onChange={(e) => setForm({ ...form, month: e.target.value })} required>
        <option>January</option><option>February</option> {/* Add all months */}
      </select>
      <textarea placeholder="Additional Notes" onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })} />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default BookingForm;