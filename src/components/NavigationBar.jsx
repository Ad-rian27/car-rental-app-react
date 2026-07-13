import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
                <div className="container">

                    <Link className="navbar-brand fw-bold fs-4" to="/">
                        🚗 Car Rental Management
                    </Link>

                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">

                            <li className="nav-item mx-2">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/add"
                                >
                                    Add Car
                                </Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/view"
                                >
                                    View Cars
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavigationBar