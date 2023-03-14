import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import './docBox.css';
import Header from '../../components/header/Header';
import DivMedical from '../../assets/images/img_diversemedical.png';
import Care_Img from '../../assets/images/care_img.png'
import CommCard from '../../components/commCard/CommCard';
import Footer from '../../components/footer/Footer';
import m_greenSplash from '../../assets/images/3__m_green.png';



const DocBox = () => {
  return (
    <div>
      <Header h1="Product" p="Home" p1="DocBox"/>

      {/* PRODUCT VIDEO SECTION */}

      <section className="video_product">
        <div className="container video_content">

        </div>
      </section>


      {/* SERVICES SECTION */}

      <section className="provide_services">
        <div className="container services_container">
          <div className="services_left">
            <img src={DivMedical} alt="Doctor Image" className='doc_img' />
          </div>
          <div className="services_right flex flex-col text-justify">
            <h2 className="text-3xl font-bold leading-10 w-11/12 mb-4">We Provide Essential Products For Your Health Care</h2>
            <p className="mt-4 text-base leading-7">We are working on the development of Tele-diagnostic devices that allow patients to receive remote consultations and diagnoses from nearby pharmacies and clinics. This significantly reduces the need for long-distance travel and improves access to quality care for rural and semi-urban populations. This will ensure that patients receive the treatments they need in a timely manner.</p>
            <div className="services_icon_text flex flex-row mt-4 space-x-4">
            <div className="services_icon flex flex-col space-y-6 mt-3.5">
              <FaCheckCircle />
              <FaCheckCircle />
              <FaCheckCircle />
            </div>
            <div className="services_right_text">
              <p className="leading-10 text-ls font-normal">24 Hours Emergency Assistance Call Us</p>
              <p className="leading-10 text-ls font-normal">We are committed to providing healthcare service</p>
              <p className="leading-10 text-ls font-normal">Really know the true needs and expectations of patients</p>
            </div>
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
              <h3 className="text-2xl">Urgent Care</h3>
              <p className="text-sm leading-7 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="card card_care flex flex-col items-center space-y-4">
              <img src={Care_Img} alt="Care Image" />
              <h3 className="text-2xl">Regular Care</h3>
              <p className="text-sm leading-7 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div>
        </div>
      </section>


      <CommCard dynamicImg={m_greenSplash} text="Nurse" />

      <Footer />
    </div>
  )
}

export default DocBox;