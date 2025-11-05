import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import { Link, Route, Routes } from "react-router-dom";
import SideNavBar from "./component/SideNavBar";
import { motion, AnimatePresence, spring } from "framer-motion";

export default function HomeLayout() {
  const [openNav, setOpenBav] = useState(true);

  return (
    <>
      <div className="h-screen overflow-hidden overflow-y-auto">
        {openNav && (
          <AnimatePresence>
            <motion.div
              key="box"
              initial={{ x: "-100%" }}
              animate={{ x: 0, transition: { duration: 1 } }}
              exit={{ x: "-100%", transition: { duration: 1 } }} // 1 sec
              className="fixed inset-0 bg-black/10 w-[20%] backdrop-blur-2xl"
            />
          </AnimatePresence>
        )}

        <div className="flex flex-col h-full ">
          <SideNavBar setOpenBav={setOpenBav} openNav={openNav} />
          {/* 
          <div className="fixed inset-0 bg-black/90 w-[20%]  "></div> */}
          <div className="h-[90%] ">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
