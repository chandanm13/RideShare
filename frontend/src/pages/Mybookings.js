import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import 'C:/Users/chandan/Desktop/RideShare/frontend/src/App.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the bookings!", error);
      });
  }, []);

  

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vehicle-type-table">Vehicle Types</Link>
          </li>
          <li>
            <Link to="/my-bookings"><h4>My Bookings</h4></Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
        </ul>
        
      </div>
      <div className="content my-bookings">
        <h1>My Bookings</h1>
        <table>
          <thead>
            <tr>
              <th>Booking Reference</th>
              <th>Booking Date</th>
              <th>Vehicle Type</th>
              <th>Assign Driver</th>
              <th>Booking Status</th>
              <th>OTP</th>
              <th>Trip Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.reference}</td>
                  <td>{booking.date}</td>
                  <td>{booking.vehicleType}</td>
                  <td>{booking.driver}</td>
                  <td>{booking.status}</td>
                  <td>{booking.otp}</td>
                  <td>{booking.cost}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-records">No records to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
