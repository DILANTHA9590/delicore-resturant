// ///🔴🔴🔴🔴🔴🔴🔴🔴🔴

// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence, spring } from "framer-motion";

// export default function HomePage() {
//   const videos = ["/header_background_video/v2.mp4"];

//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isMuted, setIsMuted] = useState(() => {
//     return localStorage.getItem("delicoreMuted") !== "false"; // default = true
//   });

//   const videoRef = useRef(null);

//   const handleVideoEnd = () => {
//     setCurrentVideoIndex((prevIndex) =>
//       prevIndex === videos.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const toggleMute = () => {
//     setIsMuted((prev) => {
//       const newState = !prev;
//       localStorage.setItem("delicoreMuted", newState);
//       return newState;
//     });
//   };

//   // Smooth fade-in when unmuting
//   useEffect(() => {
//     if (!videoRef.current) return;

//     if (!isMuted) {
//       let volume = 0;
//       videoRef.current.volume = 0;
//       videoRef.current.muted = false;

//       const fadeIn = setInterval(() => {
//         if (volume < 1) {
//           volume += 0.05;
//           videoRef.current.volume = volume;
//         } else {
//           clearInterval(fadeIn);
//         }
//       }, 100);
//     } else {
//       videoRef.current.muted = true;
//     }
//   }, [isMuted]);

//   return (
//     <>
//       <section className="relative h-auto sm:h-full sm:overflow-hidden">
//         {/* ✅ Background Video */}
//         <video
//           key={currentVideoIndex}
//           ref={videoRef}
//           autoPlay
//           loop
//           muted={isMuted}
//           playsInline
//           className="absolute inset-0 object-cover w-full h-auto sm:h-full"
//         >
//           <source src={videos[currentVideoIndex]} type="video/mp4" />
//         </video>

//         {/* ✅ Dark overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* ✅ SOUND BUTTON */}
//         <button
//           onClick={toggleMute}
//           className="absolute z-20 px-4 py-2 text-white transition rounded-full bg-black/60 bottom-6 right-6 backdrop-blur-md hover:bg-black/80"
//         >
//           {isMuted ? "🔊 Enable Sound" : "🔇 Mute"}
//         </button>

//         {/* ✅ Content Wrapper */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full py-16 sm:gap-12 md:flex-row">
//           {/* Left Section */}
//           <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
//             <motion.h1
//               className="text-3xl font-bold leading-tight text-white md:text-6xl drop-shadow-lg "
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 3,
//               }}
//               transition={{
//                 duration: 2,
//               }}
//             >
//               Welcome to Delicore: <br />
//               Dine In, Take Out, <br />
//               or We've Got You Covered!
//             </motion.h1>

//             <Link
//               to="/order"
//               className="px-4 py-1.5 overflow-hidden text-lg font-semibold text-white transition rounded-full shadow-md sm:px-8 sm:py-4 bg-link hover:bg-orange-600"
//             >
//               <motion.h1
//                 initial={{
//                   x: "-200px",
//                 }}
//                 animate={{
//                   x: 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                 }}
//               >
//                 Order Now
//               </motion.h1>
//             </Link>
//           </div>

//           {/* Right Section - Booking Form */}
//           <div className="p-2">
//             <div className="flex flex-col items-center w-full max-w-md p-6 overflow-hidden rounded-lg shadow-2xl bg-white/90 md:p-10 ">
//               <h2 className="mb-4 text-2xl font-bold text-gray-800">
//                 Book a Table
//               </h2>

//               <div className="w-full space-y-4 ">
//                 <motion.input
//                   initial={{
//                     x: "700px",
//                   }}
//                   animate={{
//                     x: "0",
//                   }}
//                   transition={{
//                     duration: 0.1,
//                   }}
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
//                 />
//                 <motion.input
//                   initial={{
//                     x: "650px",
//                   }}
//                   animate={{
//                     x: "0",
//                   }}
//                   transition={{
//                     duration: 0.3,
//                   }}
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
//                 />
//                 <motion.input
//                   initial={{
//                     x: "600px",
//                   }}
//                   animate={{
//                     x: "0",
//                   }}
//                   transition={{
//                     duration: 0.5,
//                   }}
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
//                 />
//                 <motion.input
//                   initial={{
//                     x: "550px",
//                   }}
//                   animate={{
//                     x: "0",
//                   }}
//                   transition={{
//                     duration: 0.7,
//                   }}
//                   type="date"
//                   className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
//                 />
//                 <motion.input
//                   initial={{
//                     x: "500px",
//                   }}
//                   animate={{
//                     x: "0",
//                   }}
//                   transition={{
//                     duration: 0.9,
//                   }}
//                   type="time"
//                   className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
//                 />
//                 <motion.input
//                   initial={{
//                     x: "550px",
//                   }}
//                   animate={{
//                     x: "0",
//                   }}
//                   transition={{
//                     duration: 1,
//                   }}
//                   type="number"
//                   placeholder="No. of Guests"
//                   className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
//                 />

//                 <button className="w-full py-3 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, spring } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <section
        className="relative h-auto bg-center bg-no-repeat bg-cover sm:h-full"
        style={{
          backgroundImage: "url('/header.jpeg')", // ✅ Image from public folder
        }}
      >
        {/* ✅ Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ✅ Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full py-16 sm:gap-12 md:flex-row">
          {/* Left Section */}
          <div className="flex flex-col items-center p-5 space-y-6 text-center md:items-start md:text-left">
            <motion.h1
              className="text-3xl font-bold leading-tight text-white md:text-6xl drop-shadow-lg "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 3,
              }}
              transition={{
                duration: 2,
              }}
            >
              Welcome to Delicore: <br />
              Dine In, Take Out, <br />
              or We've Got You Covered!
            </motion.h1>
            <Link
              to="/order"
              className="px-4 py-1.5 overflow-hidden text-lg font-semibold text-white transition rounded-full shadow-md sm:px-8 sm:py-4 bg-link hover:bg-orange-600"
            >
              <motion.h1
                initial={{
                  x: "-200px",
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                Order Now
              </motion.h1>
            </Link>
          </div>

          {/* Right Section - Booking Form */}
          {/* Right Section - Booking Form */}
          <div className="p-2">
            <div className="flex flex-col items-center w-full max-w-md p-6 overflow-hidden rounded-lg shadow-2xl bg-white/90 md:p-10 ">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Book a Table
              </h2>

              <div className="w-full space-y-4 ">
                <motion.input
                  initial={{
                    x: "700px",
                  }}
                  animate={{
                    x: "0",
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
                />
                <motion.input
                  initial={{
                    x: "650px",
                  }}
                  animate={{
                    x: "0",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
                />
                <motion.input
                  initial={{
                    x: "600px",
                  }}
                  animate={{
                    x: "0",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
                />
                <motion.input
                  initial={{
                    x: "550px",
                  }}
                  animate={{
                    x: "0",
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  type="date"
                  className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
                />
                <motion.input
                  initial={{
                    x: "500px",
                  }}
                  animate={{
                    x: "0",
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  type="time"
                  className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
                />
                <motion.input
                  initial={{
                    x: "550px",
                  }}
                  animate={{
                    x: "0",
                  }}
                  transition={{
                    duration: 1,
                  }}
                  type="number"
                  placeholder="No. of Guests"
                  className="w-full p-1 border rounded sm:p-3 focus:ring-2 focus:ring-orange-500"
                />

                <button className="w-full py-3 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer (optional) */}
    </>
  );
}
