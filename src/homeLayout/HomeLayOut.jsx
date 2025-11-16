import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import { Link, Route, Routes } from "react-router-dom";
import SideNavBar from "./component/SideNavBar";
import { motion, AnimatePresence, spring } from "framer-motion";
import { div } from "framer-motion/client";
import Login from "./component/login-signup-componets/LoginForm";
import RegisterForm from "./component/login-signup-componets/RegisterForm";

export default function HomeLayout() {
  const [openNav, setOpenBav] = useState(false);
  const [closelogin, setCloseLogin] = useState(false);
  const [closeSignUp, setCloseSignUp] = useState(false);

  return (
    <>
      <div className="h-screen mx-auto overflow-hidden overflow-y-auto font-poppins">
        {/*------------------------------------ login form------------------------------------------------  */}

        {closelogin && <Login setCloseLogin={setCloseLogin} />}

        {/* ----------------------------signup form------------------------------------------- */}

        {closeSignUp && <RegisterForm setCloseSignUp={setCloseSignUp} />}

        {/*------------------------------------- side nav bar------------------------------------------------- */}

        {openNav && (
          <AnimatePresence>
            <motion.div
              key="box"
              initial={{ x: "-100%" }}
              animate={{ x: 0, transition: { duration: 0.2 } }}
              exit={{ x: "-100%", transition: { duration: 0.5 } }} // 1 sec
              className="fixed inset-0 bg-black/10 sm:w-[20%] w-[40%] backdrop-blur-2xl z-90"
            />
          </AnimatePresence>
        )}

        {/* ------------------------------------------desktop nav bar-------------------------------------------------- */}
        <div className="flex flex-col h-full ">
          <SideNavBar
            setOpenBav={setOpenBav}
            openNav={openNav}
            setCloseLogin={setCloseLogin}
            setCloseSignUp={setCloseSignUp}
          />
          {/*----------------------------------- Home  page ------------------------------------------------- */}
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
