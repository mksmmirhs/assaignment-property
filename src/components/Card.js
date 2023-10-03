import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BsBuildings } from 'react-icons/bs';
import { BiBed } from 'react-icons/bi';
import { LiaBathSolid } from 'react-icons/lia';
import { BsArrowsMove } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Card = ({ property }) => {
  const {
    for_rent_or_sale,
    popular_item,
    address,
    apartment_title,
    no_of_rooms,
    no_of_beds,
    no_of_baths,
    area,
    rent_per_month,
    id,
  } = property;
  return (
    <div className="relative max-w-[460px]">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
        <img
          className="w-full h-48 object-cover p-1 rounded-2xl"
          src="https://cdn.stocksnap.io/img-thumbs/960w/building-facade_PDZMKNQLBI.jpg"
          alt=""
        />
        <button className="bg-[#fefeff] text-[#4034e0] p-4 h-[40px] rounded-full flex justify-center items-center absolute top-0 m-4 font-bold z-10">
          For {for_rent_or_sale}
        </button>

        <button className="bg-[#fefeff] rounded-full absolute top-0 right-0 p-2 m-4">
          <AiOutlineHeart color="#4034e0"></AiOutlineHeart>
        </button>

        {/* card body */}
        <div className="px-6 py-8">
          <div className="flex gap-2 items-center">
            <CiLocationOn color="#d3c7ae"></CiLocationOn>
            <h1>{address}</h1>
          </div>
          <h2 className="text-xl font-bold mt-2 mb-2">{apartment_title}</h2>
          <div className="grid grid-cols-4">
            <div className="border-dashed border-r border-b p-2 flex flex-col justify-center items-center ">
              <BsBuildings></BsBuildings>
              <h1>{no_of_rooms} Room</h1>
            </div>
            <div className="border-dashed border-r border-b flex flex-col justify-center items-center">
              <BiBed></BiBed>
              <h1>{no_of_beds} Bed</h1>
            </div>
            <div className="border-dashed border-r border-b flex flex-col justify-center items-center">
              <LiaBathSolid></LiaBathSolid>
              <h1>{no_of_baths} Bath</h1>
            </div>
            <div className="border-dashed border-b flex flex-col justify-center items-center">
              <BsArrowsMove></BsArrowsMove>
              <h1>{area}</h1>
            </div>
          </div>
          {/* bottom */}
          <div className="my-4 flex justify-between items-center s">
            <div>
              {rent_per_month ? (
                <h1>
                  <span className="text-[#4035e0] font-bold">
                    ${rent_per_month}
                  </span>
                  /month
                </h1>
              ) : (
                ''
              )}
            </div>
            <div>
              <Link
                to={`http://localhost:3000/property/${id}`}
                className="border border-[#4035e0] p-4 rounded-full text-[#4035e0] h-[40px] w-[120px] flex items-center justify-center "
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[160px] -left-2 ">
        {popular_item ? (
          <button className="text-2xl bg-[#4034e0] text-white py-2 px-8 font-semibold rounded-md rounded-bl-none relative before:absolute before:content before:bg-blue-800 before:h-[14px] before:w-[13px] before:-bottom-[14px] before:left-0 before:rounded-bl-[80%] before:z-0 shadow-lg">
            Popular
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Card;
