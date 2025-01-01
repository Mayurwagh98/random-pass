const Signup: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 justify-center items-center p-6 w-[50%] shadow-md m-auto mt-6 border rounded-lg  font-Montserrat">
      <h1 className="text-2xl">Signup</h1>
      <label className="flex flex-col gap-1 justify-start items-start w-full">
        Email:
        <input
          type="email"
          className="border border-gray-250 rounded-sm w-full p-2 outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 justify-start items-start w-full">
        Password:
        <input
          type="password"
          className="border border-gray-250 rounded-sm w-full p-2 outline-none"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 m-2 rounded">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
