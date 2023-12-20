"use client";
import React, { useState } from "react";
import { FormEvent, ChangeEvent } from "react";

interface SignUpFormState {
  fullName: string;
  userName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState<SignUpFormState>({
    fullName: "",
    userName: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const registerUser = async (event: FormEvent<HTMLFormElement>) => {
    setSending(true);

    event.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    const resetForm = () => {
      Object.keys(formData).forEach((k) => {
        formData[k as keyof SignUpFormState] = "";
      });
    };

    if (res.status === 200) {
      resetForm();
      setSending(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } else if (res.status === 400) {
      setSuccess(false);
      setSending(false);
    }
  };

  return (
    <div className="w-full m-auto max-w-[450px] min-h-screen flex justify-start items-center flex-col pt-44 px-4">
      <span className="flex justify-center border-b-2 w-[95%] border-amber-800 text-2xl text-amber-800 font-semibold pb-2 mb-6">
        Register
      </span>
      <form
        onSubmit={registerUser}
        className="w-full flex items-center flex-col"
      >
        <div className="fields flex flex-row w-[95%]">
          <label htmlFor="fullName" className="w-1/5 text-[16px]">
            Name
          </label>
          <input
            type="text"
            className="w-4/5 border border-amber-800 outline-none p-1 bg-white shadow-sm text-sm max-xsm:w-full ml-2"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="fields flex flex-row w-[95%]">
          <label htmlFor="userName" className="w-1/5 text-[16px]">
            Username
          </label>
          <input
            type="text"
            className="w-4/5 border border-amber-800 outline-none p-1 shadow-sm text-sm max-xsm:w-full ml-2"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="fields flex flex-row w-[95%]">
          <label htmlFor="address" className="w-1/5 text-[16px]">
            Address
          </label>
          <input
            type="text"
            className="w-4/5 border border-amber-800 outline-none p-1 shadow-sm text-sm max-xsm:w-full ml-2"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="fields flex flex-row w-[95%]">
          <label htmlFor="city" className="w-1/5 text-[16px]">
            City
          </label>
          <input
            type="text"
            className="w-4/5 border border-amber-800 outline-none p-1 shadow-sm text-sm max-xsm:w-full ml-2"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="fields flex flex-row w-[95%]">
          <label htmlFor="phone" className="w-1/5 text-[16px]">
            Phone
          </label>
          <input
            type="text"
            className="w-4/5 border border-amber-800 outline-none p-1 shadow-sm text-sm max-xsm:w-full ml-2"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="fields flex flex-row w-[95%]">
          <label htmlFor="email" className="w-1/5 text-[16px]">
            Email
          </label>
          <input
            type="email"
            className="w-4/5 border border-amber-800 outline-none p-1 shadow-sm text-sm max-xsm:w-full ml-2"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="fields flex flex-row w-[95%]">
          <label htmlFor="password" className="w-1/5 text-[16px]">
            Password
          </label>
          <input
            type="text"
            className="w-4/5 border border-amber-800 outline-none p-1 shadow-sm text-sm max-xsm:w-full ml-2"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[#9ebaa2] 
          bg-gradient-to-r from-amber-800 via-amber-950 to-black text-white text-[14px] 
          leading-[17px] font-bold"
        >
          {sending ? "Sending..." : success ? "sent successfully" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
