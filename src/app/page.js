'use client'
import React from 'react';
import Customerlayout from './customer/layout';
import TopBar from '../components/homepage/topbar';
import HeroSection from '../components/homepage/herosection';
import ServiceSection from '../components/homepage/customersupport';
import ExploreAllVehicleParts from '../components/homepage/ExploreAllVehicleParts';
import FeatureParts from '../components/homepage/featuredparts';
import ShopSpareParts from '../components/homepage/ShopSpareParts';
import ServiceSection2 from '../components/homepage/servicessection';
import BusinessReviewSection from '../components/homepage/businessreviewssection';
import SpareParts from '../components/homepage/spareparts';
import WhyChooseUs from '../components/homepage/whychooseus';
import PopularParts from '../components/homepage/PopularParts';
import Footer from '../components/homepage/Footer'

export default function CustomerPage () {
  // const [formData, setFormData] = useState({});
  return (
    
    <Customerlayout>
    <div>
      <HeroSection/>
      <ServiceSection/>
      <ExploreAllVehicleParts/>
      <FeatureParts/>
      <ShopSpareParts/>
      <ServiceSection2/>
      <BusinessReviewSection/>
      <SpareParts/>
      <WhyChooseUs/>
      <PopularParts/>
    </div>
    </Customerlayout>
  );
};
