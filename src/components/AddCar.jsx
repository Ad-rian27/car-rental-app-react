import axios from 'axios';
import React, { useState } from 'react'

const AddCar = () => {

    const [input, changeInput] = useState({

            "registration_number": "",
            "brand": "",
            "model": "",
            "vehicle_type": "",
            "fuel_type": "",
            "transmission": "",
            "seating_capacity": "",
            "rent_per_day": "",
            "city": "",
            "availability_status": "Available"

})

const [error, setError] = useState("");

const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    } 

const readValue = () => {
        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-car", input).then(

            (response) => {
                console.log(response.data)
                alert("Car added successfully")
            }

        ).catch(
            (error) => (
                console.error("Error Adding Car", error)
            )
        )

    }

return (
    <div>

        <div className="container mt-5">
            {error && (
                <div style={{ color: 'red', fontWeight: 'bold', marginBottom: '15px' }}>
                    {error}
                </div>
            )}
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Registration Number</label>
                            <input type="text" className="form-control" onChange={inputHandler} name='registration_number' value={input.registration_number} pattern="[A-Za-z]{2}-\d{2}-[A-Za-z]{2}-\d{4}" required />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Brand</label>
                            <input type="text" name='brand' value={input.brand} onChange={inputHandler} className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Model</label>
                            <input type="text" name='model' value={input.model} onChange={inputHandler} className="form-control" required />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Vehicle Type</label>
                            <select name="vehicle_type" id="" className="form-control" onChange={inputHandler} value={input.vehicle_type}>
                                <option value="">----Select option----</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="MUV">MUV</option>
                                <option value="Luxury">Luxury</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Fuel Type</label>
                            <select name="fuel_type" id="" className="form-control" onChange={inputHandler} value={input.fuel_type}>
                                <option value="">----Select option----</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="CNG">CNG</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Transmission</label>
                            <select name="transmission" id="" className="form-control" onChange={inputHandler} value={input.transmission}>
                                <option value="">----Select option----</option>
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Seating capacity</label>
                            <input type="number" name="seating_capacity" id="" onChange={inputHandler} value={input.seating_capacity} min="2" max="10" required title="Seating capacity must be between 2 and 10." className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Rent (per day)</label>
                            <input type="number" name="rent_per_day" onChange={inputHandler} value={input.rent_per_day} min="0.01" step="0.01" id="" required className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">City</label>
                            <input type="text" value={input.city} onChange={inputHandler} name='city' className="form-control" required />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Availability</label>
                            <select name="availability_status" id="" className="form-control" onChange={inputHandler} value={input.availability_status} >
                                <option value="Available">Available</option>
                                <option value="Booked">Booked</option>
                                <option value="Maintenance">Maintenance</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>Submit</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
)
}

export default AddCar