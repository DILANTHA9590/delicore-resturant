import React from "react";
import HomePage from "./pages/HomePage";
import { Link, Route, Routes } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <div
        className="h-screen "
        style={{
          backgroundImage:
            "url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIAu.img?encodeType=webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="flex flex-col h-full sm:p-8">
          <div className="h-[10%] opacity-55 backdrop-blur-xl flex justify-between items-center sm:text-4xl font-bold ">
            <div>
              <h1>Delicore</h1>
              <h1 className="pl-5 fonti">Resturant</h1>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex gap-10">
                <Link>Login</Link>
                <Link clas>Register</Link>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <h1 className="w-13 h-1.5 bg-amber-50"></h1>
                  <h1 className="w-13 h-1.5 bg-amber-50"></h1>
                  <h1 className="w-13 h-1.5 bg-amber-50"></h1>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[90%]">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
