import React from 'react'


function Home() {
  return (
    <div className="container my-5 text-center">
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
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
    </div>
  )
}

export default Home