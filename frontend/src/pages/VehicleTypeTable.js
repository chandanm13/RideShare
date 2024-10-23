// src/pages/VehicleTypeTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const VehicleTypeTable = () => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/vehicle-types')
      .then(response => {
        setVehicleTypes(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the vehicle types!", error);
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
            <Link to="/vehicle-type-table"><h4>Vehicle Types</h4></Link>
          </li>
          <li>
            <Link to="/my-bookings">My Bookings</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
        </ul>
        
      </div>
      <div className="content">
        <h1>Vehicle Types</h1>
        <div className="vehicle-type-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Base Fare</th>
                <th>Distance Rate Per (Km or Mile)</th>
                <th>Rate Per Hour</th>
                <th>Minimum Fare</th>
                <th>Convenience Fees</th>
                <th>Convenience Fee Type</th>
                <th>Fleet/Admin Commission</th>
                <th>Extra Information</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicleTypes.map((vehicle, index) => (
                <tr key={index}>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.baseFare}</td>
                  <td>{vehicle.distanceRate}</td>
                  <td>{vehicle.ratePerHour}</td>
                  <td>{vehicle.minimumFare}</td>
                  <td>{vehicle.convenienceFees}</td>
                  <td>{vehicle.convenienceFeeType}</td>
                  <td>{vehicle.fleetAdminCommission}</td>
                  <td>{vehicle.extraInfo}</td>
                  <td>
                    <button>Cancellation Slabs</button>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleTypeTable;
