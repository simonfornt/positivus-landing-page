import React from 'react';
import amazon from "../assets/amazon.png";
import drille from "../assets/drille.png";
import hubspot from "../assets/hubspot.png";
import notion from "../assets/notion.png";
import netflex from "../assets/nextflex.png";
import zoom from "../assets/zoom.png";

const brands = [amazon, drille, hubspot, notion, netflex, zoom];

function BrandSection() {
  return (
    <div className='w-7/8 mx-auto'>
      <div className='flex flex-wrap gap-4 justify-between my-4 items-center'>
        {brands.map((brand, index) => (
          <li key={index} className='list-none grayscale hover:grayscale-0'>
            <img src={brand} alt={`Brand ${index + 1}`} />
          </li>
        ))}
      </div>
    </div>
  );
}

export default BrandSection;
