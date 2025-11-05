import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SideNavBar({ setOpenBav, openNav }) {
  return (
    <div className="h-[10%] opacity-55 backdrop-blur-xl flex  justify-between items-center sm:text-4xl text-description font-bold sm:px-8 p-2 top-0 sticky bg-secondary_white">
      <div className="leading-4 sm:leading-8">
        <h1>Delicore</h1>
        <h1 className="pl-5 sm:pl-10">Resturant</h1>
      </div>
      <div className="flex items-center gap-3 sm:gap-10">
        <div className="flex gap-3 sm:gap-10">
          <Link>Login</Link>
          <Link clas>Register</Link>
        </div>
        <div onClick={() => setOpenBav(!openNav)}>
          {openNav ? (
            <div className="relative ">
              <motion.h1
                className="sm:w-13 w-9 h-1.5 absolute bg-primary " //rotate-44
                //  rotate-134
                initial={{
                  rotate: 0,
                }}
                animate={{
                  rotate: -45,
                }}
              ></motion.h1>
              <motion.h1
                className="sm:w-13 w-9 h-1.5 w-  bg-primary"
                initial={{
                  rotate: 0,
                }}
                animate={{
                  rotate: 45,
                }}
              ></motion.h1>
            </div>
          ) : (
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1 className="sm:w-13 w-9 h-1.5 bg-primary"></h1>
              <h1 className="sm:w-13 w-6 h-1.5 bg-primary"></h1>
              <h1 className="sm:w-13 w-9 h-1.5 bg-primary"></h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
