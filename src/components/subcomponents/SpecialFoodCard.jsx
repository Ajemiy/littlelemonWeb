import React from 'react'

const SpecialFoodCard = ({img, title}) => {
  return (
    <div class="card">
      <img class="card-img-top" src={img} alt={img}/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-danger">Order a Delivery</small>
      </div>
    </div>
    // <div class="card">
    //   <img class="card-img-top" src="..." alt="Card image cap"/>
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    //   </div>
    //   <div class="card-footer">
    //     <small class="text-muted">Last updated 3 mins ago</small>
    //   </div>
    // </div>
    // <div class="card">
    //   <img class="card-img-top" src="..." alt="Card image cap"/>
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    //   </div>
    //   <div class="card-footer">
    //     <small class="text-muted">Last updated 3 mins ago</small>
    //   </div>
    // </div>
  )
}

export default SpecialFoodCard