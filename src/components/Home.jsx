import React from 'react'
import NavigationBar from './NavigationBar'


function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="container my-5 text-center">


        {/* Main App Title */}
        <h1 className="display-5 fw-bold text-dark mb-3">
          Car Rental Management
        </h1>

        {/* Purposeful Welcome Message */}
        <p className="col-md-8 mx-auto fs-5 text-muted mb-4">
          Welcome to the car rental operational dashboard. Use this application to manage your active vehicle fleet, register new cars, and monitor vehicle availability.
        </p>

        <hr className="my-4" style={{ maxWidth: '400px', margin: '0 auto' }} />


      </div>
    </div>

  )
}

export default Home