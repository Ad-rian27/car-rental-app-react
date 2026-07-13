import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";

const ViewCars = () => {
  const [fdata, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/cars")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="container mt-5">




        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle text-center">
              <thead className="table-info">
                <tr>
                  <th>Reg No</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Fuel</th>
                  <th>Transmission</th>
                  <th>Seats</th>
                  <th>Rent/Day</th>
                  <th>City</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {fdata.map((value, index) => (
                  <tr key={index}>
                    <td>{value.registration_number}</td>
                    <td>{value.brand}</td>
                    <td>{value.model}</td>
                    <td>{value.vehicle_type}</td>
                    <td>{value.fuel_type}</td>
                    <td>{value.transmission}</td>
                    <td>{value.seating_capacity}</td>
                    <td>₹ {value.rent_per_day}</td>
                    <td>{value.city}</td>
                    <td>
                      <span
                        className={`badge ${value.availability_status === "Available"
                            ? "bg-success"
                            : value.availability_status === "Maintenance"
                              ? "bg-warning text-dark"
                              : value.availability_status === "Booked"
                                ? "bg-danger"
                                : "bg-secondary"
                          }`}
                      >
                        {value.availability_status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCars;