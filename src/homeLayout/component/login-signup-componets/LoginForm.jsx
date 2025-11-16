import React from "react";
import { Link } from "react-router-dom";

export default function Login({ setCloseLogin }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-105 backdrop-blur-2xl mt">
      <form className="flex flex-col items-center justify-center  bg-white sm:w-2xl w-xl h-[500px] gap-8 rounded-3xl relative">
        <div
          className="absolute top-0 right-0 p-5"
          onClick={() => {
            setCloseLogin(false);
          }}
        >
          <h1 className="w-[30px] absolute h-2 bg-black rotate-45"></h1>
          <h1 className="w-[30px] h-2 bg-black rotate-135"></h1>
        </div>
        <h1 className="font-bold text-main_title">Login</h1>
        <input
          type="text"
          className="sm:w-[400px] h-12 bg-white border"
          required
          autoFocus
          placeholder="Enter your email"
        />
        <input
          type="text"
          className="sm:w-[400px]  h-12 bg-white border"
          required
          placeholder="Input your password"
          minLength={8}
        />

        <button className=" sm:w-[400px]  px-10 py-3 bg-green-400 rounded cursor-pointer">
          Login
        </button>
        <h1 className="font-bold">
          Dont have an account?
          <span>
            <Link title="signup" className="text-blue-800">
              SignUp
            </Link>
          </span>
        </h1>
      </form>
    </div>
  );
}
