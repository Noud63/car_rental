"use client"
import React,{useState, useEffect} from 'react'
import { FormEvent } from "react";


const Signin = () => {

const [ email, setEmail ] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    console.log(data);
    setEmail("")
    setPassword("")
  };

  return (
    <div className="w-full m-auto max-w-[450px] min-h-screen flex justify-start items-center flex-col pt-52 px-4">
      <span className="flex justify-center border-b-2 w-[95%] border-lime-800 text-xl font-semibold pb-2">
        Signin
      </span>
      <form
        onSubmit={submitHandler}
        className="w-full flex items-center flex-col"
      >
        <div className="flex flex-row w-[95%] my-6">
          <label htmlFor="email" className="w-1/5 text-[16px]">
            Email
          </label>
          <input
            type="email"
            className="w-4/5 border border-lime-800 outline-none p-1 shadow-sm text-sm ml-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-row w-[95%] mb-6">
          <label htmlFor="password" className="w-1/5 text-[16px]">
            Password
          </label>
          <input
            type="text"
            className="w-4/5 border border-lime-800 outline-none p-1 shadow-sm text-sm ml-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[#9ebaa2] 
          bg-gradient-to-r from-[#9ebaa2] to-black text-white text-[14px] 
          leading-[17px] font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin
