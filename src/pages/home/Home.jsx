import React from 'react';

import './home.css';
import Footer from '../../components/footer/Footer';
import Cards from '../../UI/Cards';
import { serviceCards, speciality } from '../../data';

import impact_img from '../../assets/images/img_impact_image.png';
import award1 from '../../assets/images/img_image11.png';
import award2 from '../../assets/images/img_image12.png';
import land_slide_1 from '../../assets/images/Landing-Slider-2.png';
import land_slide_2 from '../../assets/images/Landing-Slider-5.png';
import quality_health from '../../assets/images/quality_health_img.png'
import meet_doctor from '../../assets/images/meet_doctor_img.png';





const Home = () => {
  return (
    <div>
      <section className="home_page_main">
        <div className="main_container flex">
          <div className="left_main">
            <h2>No <br /> Delay in <br /> <span>Healthcare</span> </h2>
            <p className='italic font-medium text-lg'>Empowering people and the community for a health life</p>
            <button className='home_page_btn font-bold text-base'> READ MORE </button>
          </div>

          <div className="right_main flex">
            <img src={land_slide_1} alt="" className='image1' />
            <img src={land_slide_2} alt="" className='image2' />
          </div>
        </div>
      </section>

      <section className="quality_healthCare flex">
        <img src={quality_health} alt="" />
        <div className="quality_health_contents">
          <h3 className='font-bold'>Quality Healthcare Starts With Quality</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates, odio incidunt iusto eum non, laudantium consequatur alias deleniti iste perferendis recusandae, deserunt dolore corrupti dolores. Quia voluptas aperiam nihil magnam dolor, pariatur, dolorum possimus nemo totam nisi autem esse omnis soluta? Veritatis animi illo dicta, fugit nostrum quo possimus.</p>
          <button className='home_page_btn font-bold text-base'> READ MORE </button>
        </div>
      </section>

      <section className="speciality">
        <div className="container speciality_container flex flex-col items-center">
          <h3 className="text-black text-3xl font-bold mb-4">Our Speciality</h3>
          <p className="text-base font-normal w-3/4 text-center mb-4 leading-7">Ask a doctor online and get quick medical advice for your health queries. Our medical panel consists of over 3500, doctors from 80, specialties. </p>
        </div>

        <div className='Speciality_wrapper container'>
          {
            speciality.map(({ id, image, title }) => {
              return (
                <Cards className="speciality_cards flex flex-col" key={id} >
                  <span> {image} </span>
                  <h4 className='font-bold'> {title} </h4>
                </Cards>
              )
            })
          }
        </div>
      </section>

      <section className="meet_doctor">
        <div className="doctor_online_container container flex">
          <img src={meet_doctor} alt="" />
          <div className="meet_doctor_contents">
            <h3 className='font-bold'>Meet a doctor online</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus perspiciatis nam amet? Voluptas commodi perferendis, ipsa veniam inventore voluptatum consectetur vero quia, laboriosam doloribus accusantium, rem dolores tempore recusandae esse.</p>
            <button className='home_page_btn font-bold text-base'> READ MORE </button>
          </div>
        </div>
      </section>

      <section className="achievments">
        <div className="achiev_container flex flex-col items-center">
          <h4 className='font-bold text-lg'>Our Achievements</h4>
          <img src={impact_img} alt="" className='impact_img' />
          <div className="awards_image flex">
            <img src={award1} alt="" />
            <img src={award2} alt="" />
          </div>
        </div>
      </section>

      <section className="blank"></section>
      <Footer />
    </div>
  )
}

export default Home;