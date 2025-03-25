import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote: "Thanks to Positivus, our social media engagement has skyrocketed, and our sales have doubled in just six months. Their team is proactive, innovative, and always delivers measurable results.",
    name: "Sarah Johnson",
    position: "CEO at ABC Ltd",
  },
  {
    quote: "The SEO strategy provided by Positivus helped us achieve a first-page ranking for multiple keywords, driving a 300% increase in organic traffic. We couldn't be happier with their services!",
    name: "David Lee",
    position: "Founder at StartupX",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    
  };

  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 my-12 items-center text-center md:text-left">
        <button className="bg-[#B9FF66] px-6 font-medium rounded-lg text-[28px] md:text-[40px] hover:bg-lime-400">
          Testimonials
        </button>
        <p className="text-sm md:text-base">
          Explore Real-Life Examples of Our Proven Digital Marketing <br className="hidden md:block" /> 
          Success through Our Case Studies
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="bg-black text-white rounded-3xl p-6 md:p-8">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center flex justify-center items-center p-4">
              <div className="border border-lime-300 rounded-lg w-full max-w-lg mx-auto p-6">
                <p className="text-md mb-4 text-left">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="text-lime-400 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
