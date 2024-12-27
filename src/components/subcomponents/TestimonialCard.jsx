import React from 'react'

const TestimonialCard = () => {

  const testCard = [
    {
      img: "../../assets/img/logo192.png"
    },
    {},
    {},
    {}
  ]
  return (
    <div class="jumbotron jumbotron-fluid bg-dark-subtle p-5" >
      <h1 class="display-4 container">TestimonialCard</h1>
      <div class="container flex-box">
        {testCard.map((item, index) => (
          <div class="card w-25">
          <div class="card-body">
            {/* <h5 class="card-title">Card title</h5> */}
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <img src="#" class="btn btn-primary"/>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard