import React from 'react'
import SpecialFoodCard from './subcomponents/SpecialFoodCard'
import TestimonialCard from './subcomponents/TestimonialCard'
import HeroSection from './subcomponents/HeroSection'
// import Form from './subcomponents/Form'
import { Link } from 'react-router-dom'

const Main = () => {

  const cardData = [
    {
      title: "Greek Salad",
      img: "../../assets/img/logo192.png"
    },
    {
      title: "Bruchetta",
      img: "../../assets/img/Logo.svg"
    },
    {
      title: "Lemon Desert",
      img: "../../assets/img/logo192.png"
    }
  ]

  //available time: UseReducer
  //ARIA
  //React.FGragement insteac oif Div whewre redundant
  return (
    <main>
      <HeroSection/>
      <div className='container flex-box mb-5'>
        <h3>This week's Special</h3>
        <Link className='btn btn-warning'>Online Menu</Link>
      </div>
      <section className='container'>
        <ul class="card-deck flex-box">
          {cardData.map((item, index) => 
            <li className='flex-3'><SpecialFoodCard title={item.title} img={item.img}/></li>
          )}
        </ul> 
      </section>
      <section className='Testimonials'>
      <TestimonialCard/>
      </section>
    </main>
  )
}

export default Main
