"use client";
import React from "react";

export default function Page15M() {
  return (
    <section className="w-full flex flex-col relative z-20 -mt-20 items-center py-12 px-4 bg-white">

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-[#545454] mb-8 text-center">
        Cost of Studying in<br/> Australia
      </h2>

      {/* Scholarships Card */}
      <div className="relative bg-white shadow-xl rounded-3xl px-8 py-5 mb-12 w-full max-w-md">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#37D7D9] text-xl">★</span>
        <p className="text-center text-lg font-semibold text-[#000000]">Scholarships</p>
        <p className="text-center text-[#000000] mt-2 text-sm">
          Offered by Australian Government & Universities    
        </p>
      </div>

      {/* Tuition Fees */}
      <div className="relative w-full max-w-md rounded-xl mb-5 overflow-hidden">
        {/* Animated background fill */}
        <div 
          className="absolute inset-0 bg-[#37D7D9]/10 origin-left animate-pulse-scale-30"
          style={{ borderRadius: '0.75rem' }}
        ></div>
        
        <div className="relative border-2 border-[#37D7D9] rounded-xl">
          <p className="font-bold text-sm text-[#000000] translate-y-3 mb-2">Tuition Fees</p>
          <p className="text-[#000000] translate-x-23 -translate-y-3 text-xs">
            AUD $20,000 – $45,000/year(depending on course)
          </p>
        </div>
      </div>

      {/* Living Costs */}
      <div className="relative w-full max-w-md rounded-xl mb-5 overflow-hidden">
        {/* Animated background fill */}
        <div 
          className="absolute inset-0 bg-[#37D7D9]/10 origin-left animate-pulse-scale-60"
          style={{ borderRadius: '0.75rem' }}
        ></div>
        
        <div className="relative border-2 border-[#37D7D9] rounded-xl">
          <p className="font-bold text-sm text-[#000000] translate-y-3 mb-2">Living Costs</p>
          <p className="text-[#000000] translate-x-57 -translate-y-3 text-xs">
            AUD $1,500 – $2,200/month
          </p>
        </div>
      </div>

      {/* Visa Fees */}
      <div className="relative w-full max-w-md rounded-xl mb-10 overflow-hidden">
        {/* Animated background fill */}
        <div 
          className="absolute inset-0 bg-[#37D7D9]/10 origin-left animate-pulse-scale-90"
          style={{ borderRadius: '0.75rem' }}
        ></div>
        
        <div className="relative border-2 border-[#37D7D9] rounded-xl">
          <p className="font-bold text-sm text-[#000000] translate-y-3 mb-2">Visa Fees</p>
          <p className="text-[#000000] translate-x-85 -translate-y-3 text-xs">$620</p>
        </div>
      </div>

      {/* Total */}
      <div className="text-center w-full max-w-md">
        <p className="text-[#000000] font-semibold text-2xl">Total</p>
        <p className="text-xl font-bold text-[#000000] bg-white shadow-md shadow-[#CFF5F6] rounded-2xl px-6 py-5">
          AUD $39,000 – 72,700
        </p>
      </div>

      <style jsx>{`
        @keyframes pulseScale30 {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(0.9); }
        }
        
        @keyframes pulseScale60 {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(0.6); }
        }
        
        @keyframes pulseScale90 {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(0.3); }
        }
        
        .animate-pulse-scale-30 {
          animation: pulseScale30 3s ease-in-out infinite;
        }
        
        .animate-pulse-scale-60 {
          animation: pulseScale60 3s ease-in-out infinite;
        }
        
        .animate-pulse-scale-90 {
          animation: pulseScale90 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}