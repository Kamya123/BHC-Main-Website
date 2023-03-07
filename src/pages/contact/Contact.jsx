import React from "react";
import { BsClock, BsTelephoneOutbound } from "react-icons/bs";

import "./contact.css";
import bt_img from "../../assets/images/img_main_cropped.png";
import appStore from "../../assets/images/img_maskgroup11.png";
import googleStore from "../../assets/images/img_maskgroup1.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Contact = () => {
  return (
    <div>
      <Header h1="Contact" p="Home" p1="Contact Us" />

      <section className="assist_contact_section">
        <div className="container">
          <div className="contact_assist_text flex">
            <h3 className="font-bold text-4xl">
              Tell us how we can assist you and we will get in touch promptly
            </h3>
          </div>
        </div>
        <div className="container contact_card_container flex flex-row justify-center">
          <div className="card contact-card flex flex-col items-center space-y-4">
            <span className="contact-icon">
              <BsTelephoneOutbound />
            </span>
            <h3>Contact us</h3>
            <p className="text-sm text-center leading-6">
              91+9914411392 <br /> anmol@bridgehealth.care
            </p>
          </div>
          <div className="card contact-card flex flex-col items-center space-y-4">
            <span className="contact-icon">
              <BsClock />
            </span>
            <h3>Opening Hours</h3>
            <p className="text-sm text-center leading-6">
              Moday - Friday <br /> 09:00 AM - 05:00 PM
            </p>
          </div>
        </div>
      </section>

      <section className="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248938.71092856416!2d80.06834097937028!3d12.864748526927643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d7d6641728d%3A0xddfdb15c6538d927!2sIIT%20Madras%20Research%20Park!5e0!3m2!1sen!2sin!4v1670490403001!5m2!1sen!2sin"
          width="1200"
          height="500"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <div className="bottom_container contact_bottom_container">
        <div className="container bottom_ready">
          <div className="bottom_content">
            <h2 className="get_app_heading text-4xl font-bold tracking-wide pb-10">
              Get The <span className="border-b-4 pb-2 app_text">App</span>{" "}
            </h2>
            <p className="get_app_text mb-8">
              It is a long established fact that a reader will be <br />{" "}
              distracted by the readable content of a page when <br /> looking
              at its layout. The point of using Lorem Ipsum is <br /> that it
              has a more-or-less normal distribution.
            </p>
            <div className="store_img flex justify-end">
              <img
                className="App_store_img mr-4"
                src={appStore}
                alt="App Store image"
              />
              <img
                className="play_store_img"
                src={googleStore}
                alt="Play Store image"
              />
            </div>
          </div>
          <div className="bottom_img">
            <img src={bt_img} alt="bottom image" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
