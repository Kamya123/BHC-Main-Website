import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import './about.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import DivMedical from '../../assets/images/img_diversemedical.png';
import Care_Img from '../../assets/images/care_img.png'
import CommCard from '../../components/commCard/CommCard';



const About = () => {
  return (
    <div>
      <Header h1="About Us" p="Home" p1="About Us"/>


      {/* SERVICES SECTION */}

      <section className="provide_services">
        <div className="container services_container">
          <div className="services_left">
            <img src={DivMedical} alt="Doctor Image" className='doc_img' />
          </div>
          <div className="services_right flex flex-col text-justify">
            <h2 className="text-3xl font-bold leading-10 w-11/12 mb-4">We Provide Essential Products For Your Health Care</h2>
            <p className="mt-4 text-base leading-7">Bridge Healthcare is leading a humanitarian revolution by harnessing the power of technology in the digital age. The company was founded in 2022 by students from IIT Madras and is dedicated to delivering innovative technology-based solutions to real-world healthcare problems. The team at Bridge Healthcare is passionate about advancing the field of digital healthcare and is committed to providing unrestricted access to quality healthcare for people from all walks of life. By striving for excellence and innovation, Bridge Healthcare is poised to make a significant impact in the healthcare industry.</p>
          </div>
        </div>
        <div className="container bottom-text text-justify">
          <p className="mt-4 text-base leading-7">Our goal is to enhance the communication and consultation process between doctors and patients for optimal healthcare. We aim to achieve this by developing telemedicine tools and software that provide easier access to doctors, along with analyzed medical records and real-time health data. This will aid in the improvement of primary healthcare and make medical treatment more efficient and effective.</p>
          <div className="services_icon_text flex flex-row mt-4 space-x-4">
            <div className="services_icon flex flex-col space-y-6 mt-3.5">
              <FaCheckCircle />
              <FaCheckCircle />
              <FaCheckCircle />
              <FaCheckCircle />
            </div>
            <div className="services_right_text">
              <p className="leading-10 text-ls font-normal">Connecting Rural and Semi-urban Healthcare to Mainstream</p>
              <p className="leading-10 text-ls font-normal">Upgrading of Existing Healthcare model & Enhancing efficiency</p>
              <p className="leading-10 text-ls font-normal">Primary Healthcare Accessibility and Affordability</p>
              <p className="leading-10 text-ls font-normal">Empowering rural and semi-urban Healthcare</p>
            </div>
          </div>
        </div>
      </section>


      {/* CARE HEALTH SECTION */}

      <section className="careHealth">
        <div className="container care_container flex flex-col items-center">
          <h3 className="text-black text-3xl font-bold mb-4">We Care About Your Health</h3>
          <p className="text-base font-normal w-3/4 text-center mb-4 leading-7">We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.</p>

          <div className="card_care_container flex flex-row space-x-8 mt-8">
            <div className="card card_care flex flex-col items-center space-y-4">
              <img src={Care_Img} alt="Care Image" />
              <h3 className="text-2xl">Family Care</h3>
              <p className="text-sm leading-7 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="card card_care flex flex-col items-center space-y-4">
              <img src={Care_Img} alt="Care Image" />
              <h3 className="text-2xl">Family Care</h3>
              <p className="text-sm leading-7 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="card card_care flex flex-col items-center space-y-4">
              <img src={Care_Img} alt="Care Image" />
              <h3 className="text-2xl">Family Care</h3>
              <p className="text-sm leading-7 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div>
        </div>
      </section>


      <CommCard />

      <Footer />
    </div>
  )
}

export default About;
