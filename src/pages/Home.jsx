import React from 'react'
import Image from "../assets/hero-omg.png";
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import BrandSection from '../Component/BrandSection';
import Service from '../Component/Service';
import Proposal from '../Component/Proposal';
import CaseSection from '../Component/Casesection';
import Radio from '../Component/Accordion';
import TeamSection from '../Component/TeamSection';
import Testimonials from '../Component/Testimonials';
import Footer from '../Component/Footer';



function Home() {
  return (
    <>
    <Navbar/>
    <Hero title="Navigating the  digital landscape for success"
     description="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."
     buttonText="Book a consultation" imageSrc={Image}/>
    <BrandSection/>
    <Service/>
    <Proposal/>
   <CaseSection/>
   <Radio/>
   <TeamSection/>
   <Testimonials/>

    <Footer/>
    </>
  )
}

export default Home;