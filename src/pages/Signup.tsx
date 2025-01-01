import React from "react";

const Signup: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 justify-between items-center p-6 w-[30%] min-h-[20rem] shadow-md m-auto mt-[10%] bg-black bg-opacity-80 rounded-sm">
      <h1 className="text-2xl text-white">SIGNUP</h1>
      <input
        type="email"
        className="border-b border-gray-400 bg-transparent w-full p-2 text-white placeholder-gray-300 outline-none focus:border-orange-500"
        placeholder="Email"
      />
      <input
        type="password"
        className="border-b border-gray-400 bg-transparent w-full p-2 text-white placeholder-gray-300 outline-none focus:border-orange-500"
        placeholder="Password"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 mt-4 rounded"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Signup;
