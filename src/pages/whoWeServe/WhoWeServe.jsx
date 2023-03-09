import React from 'react';

import './whoWeServe.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CommCard from '../../components/commCard/CommCard';
import ServiceCards from '../../components/serviceCards/ServiceCards';
import greenSplash from '../../assets/images/2__green.png';


const WhoWeServe = () => {
  return (
    <div>
      <Header h1="Our Services" p="Home" p1="WhoWeServe"/>
      <ServiceCards />
      <CommCard dynamicImg={greenSplash} text="Doctor" />
      <Footer />
    </div>
  )
}

export default WhoWeServe;