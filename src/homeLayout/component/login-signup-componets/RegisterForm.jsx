import React from "react";
import { Link } from "react-router-dom";

export default function RegisterForm({ setCloseSignUp }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-105 backdrop-blur-2xl mt">
      <form className="flex flex-col items-center justify-center  bg-white sm:w-2xl w-xl h-[600px] gap-8 rounded-3xl relative p-6">
        <div
          className="absolute top-0 right-0 p-5"
          onClick={() => {
            setCloseSignUp(false);
          }}
        >
          <h1 className="w-[30px] absolute h-2 bg-black rotate-45"></h1>
          <h1 className="w-[30px] h-2 bg-black rotate-135"></h1>
        </div>
        <h1 className="font-bold text-main_title">Signup</h1>
        <input
          type="text"
          className="sm:w-[400px] w-full h-12 bg-white border"
          required
          autoFocus
          placeholder="Full name"
        />
        <input
          type="email"
          className="sm:w-[400px] w-full  h-12 bg-white border"
          required
          placeholder="Email"
          minLength={8}
        />
        <input
          type="password"
          className="sm:w-[400px] w-full  h-12 bg-white border"
          required
          placeholder="password"
          minLength={8}
        />
        <input
          type="password"
          className="sm:w-[400px] w-full  h-12 bg-white border"
          required
          placeholder="Confirm password"
          minLength={8}
        />

        <input
          type="text"
          className="sm:w-[400px] w-full  h-12 bg-white border"
          required
          placeholder="Phone number"
          minLength={8}
        />

        <button className=" sm:w-[400px]  px-10 py-3 bg-green-400 rounded cursor-pointer w-full">
          SignUp
        </button>
        <h1 className="font-bold">
          Already have an account?
          <span>
            <Link title="signup" className="text-blue-800">
              Login
            </Link>
          </span>
        </h1>
      </form>
    </div>
  );
}
