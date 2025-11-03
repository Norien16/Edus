import MbelowHeader from '@/components/HomePageMobile/MbelowHeader/page'
import Mheader from '@/components/HomePageMobile/Mheader/page'

import React from 'react'
import OS2 from '../OS2/page'

const OS1 = () => {
  return (
    <>
       <div>
        <Mheader/>
        <main className="pt-21">
<div
      id="below-header"
      className="bg-[#DFFFFF] fixed items-center justify-center px-10 py-25 pt-10"
    >
      {/* Content */}
      <div className="text-center z-20">
        <h1
          className="text-2xl font-bold text-gray-700 leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Our Services
        </h1>

        <p
          className="text-[#666666] pt-8 text-sm whitespace-normal text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          From AI-powered tests and English assessments to
          community support and instant guidance, our platform 
          combines intelligent tools and minimal human interaction 
          to help you make informed decisions. Explore your options, connect with peers, and get personalized advice — all in one place.
        </p>

        {/* Buttons */}
        <div className="pt-12">
          <div className="">
            <button className="px-3 py-2 rounded-full bg-[#37D7D9] text-white text-sm shadow-md w-[50%]  whitespace-nowrap">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </div>

    <div style={{
  marginTop: 380,
  position: "relative",
  zIndex: 50,
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  boxShadow: "0 -4px 21px rgba(0,0,0,0.1)",
  background: "#fff", // helps make the rounding visible
  overflow: "hidden", // optional, lets the radius actually clip contents
}}>
                
                < OS2 />
            </div>
  
        </main>
      </div>
      </>
  )
}

export default OS1