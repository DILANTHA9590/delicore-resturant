// import React from "react";
// import { Link } from "react-router-dom";

// export default function HomePage() {
//   return (
//     <>
//       <section
//         className="relative w-full h-screen bg-center bg-no-repeat bg-cover"
//         style={{
//           backgroundImage:
//             "url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIAu.img?encodeType=webp')",
//         }}
//       >
//         {/* Dark overlay for better text contrast */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* Content Wrapper */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full gap-12 px-6 py-16 md:flex-row">
//           {/* Left Section */}
//           <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
//             <h1 className="text-3xl font-bold leading-tight text-white md:text-6xl drop-shadow-lg">
//               Welcome to Delicore: <br />
//               Dine In, Take Out, <br />
//               or We've Got You Covered!
//             </h1>

//             <Link
//               to="/order"
//               className="px-8 py-4 text-lg font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600"
//             >
//               Order Now
//             </Link>
//           </div>

//           {/* Right Section - Booking Form */}
//           <div className="flex flex-col items-center w-full max-w-md p-6 rounded-lg shadow-2xl bg-white/90 md:p-10">
//             <h2 className="mb-4 text-2xl font-bold text-gray-800">
//               Book a Table
//             </h2>

//             <div className="w-full space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="date"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="time"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="number"
//                 placeholder="No. of Guests"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />

//               <button className="w-full py-3 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="h-[40vh] bg-gray-50"></div>
//     </>
//   );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function HomePage() {
//   const videos = [
//     "/header_background_video/v1.mp4",
//     "/header_background_video/v2.mp4",
//   ];

//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   const handleVideoEnd = () => {
//     setCurrentVideoIndex((prevIndex) =>
//       prevIndex === videos.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <>
//       <section className="relative w-full h-screen overflow-hidden">
//         {/* ✅ Background Video */}
//         <video
//           key={currentVideoIndex}
//           autoPlay
//           loop={false}
//           muted
//           playsInline
//           onEnded={handleVideoEnd}
//           className="absolute inset-0 object-cover w-full h-full"
//         >
//           <source src={videos[currentVideoIndex]} type="video/mp4" />
//         </video>

//         {/* ✅ Dark overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* ✅ Content Wrapper */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full gap-12 px-6 py-16 md:flex-row">
//           {/* Left Section */}
//           <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
//             <h1 className="text-3xl font-bold leading-tight text-white md:text-6xl drop-shadow-lg">
//               Welcome to Delicore: <br />
//               Dine In, Take Out, <br />
//               or We've Got You Covered!
//             </h1>

//             <Link
//               to="/order"
//               className="px-8 py-4 text-lg font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600"
//             >
//               Order Now
//             </Link>
//           </div>

//           {/* Right Section - Booking Form */}
//           <div className="flex flex-col items-center w-full max-w-md p-6 rounded-lg shadow-2xl bg-white/90 md:p-10">
//             <h2 className="mb-4 text-2xl font-bold text-gray-800">
//               Book a Table
//             </h2>

//             <div className="w-full space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="date"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="time"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="number"
//                 placeholder="No. of Guests"
//                 className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
//               />

//               <button className="w-full py-3 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="h-[40vh] bg-gray-50"></div>
//     </>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const videos = [
    "/header_background_video/v1.mp4",
    "/header_background_video/v2.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("delicoreMuted") !== "false"; // default = true
  });

  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newState = !prev;
      localStorage.setItem("delicoreMuted", newState);
      return newState;
    });
  };

  // Smooth fade-in when unmuting
  useEffect(() => {
    if (!videoRef.current) return;

    if (!isMuted) {
      let volume = 0;
      videoRef.current.volume = 0;
      videoRef.current.muted = false;

      const fadeIn = setInterval(() => {
        if (volume < 1) {
          volume += 0.05;
          videoRef.current.volume = volume;
        } else {
          clearInterval(fadeIn);
        }
      }, 100);
    } else {
      videoRef.current.muted = true;
    }
  }, [isMuted]);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* ✅ Background Video */}
        <video
          key={currentVideoIndex}
          ref={videoRef}
          autoPlay
          loop={false}
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* ✅ Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ✅ SOUND BUTTON */}
        <button
          onClick={toggleMute}
          className="absolute z-20 px-4 py-2 text-white transition rounded-full bg-black/60 bottom-6 right-6 backdrop-blur-md hover:bg-black/80"
        >
          {isMuted ? "🔊 Enable Sound" : "🔇 Mute"}
        </button>

        {/* ✅ Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-12 px-6 py-16 md:flex-row">
          {/* Left Section */}
          <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-6xl drop-shadow-lg">
              Welcome to Delicore: <br />
              Dine In, Take Out, <br />
              or We've Got You Covered!
            </h1>

            <Link
              to="/order"
              className="px-8 py-4 text-lg font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600"
            >
              Order Now
            </Link>
          </div>

          {/* Right Section - Booking Form */}
          <div className="flex flex-col items-center w-full max-w-md p-6 rounded-lg shadow-2xl bg-white/90 md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Book a Table
            </h2>

            <div className="w-full space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="date"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="time"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="number"
                placeholder="No. of Guests"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500"
              />

              <button className="w-full py-3 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[40vh] bg-gray-50"></div>
    </>
  );
}
