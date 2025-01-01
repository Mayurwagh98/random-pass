import { useRef } from "react";

const Signup: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);
  };

  return (
    <form
      className="flex flex-col gap-4 justify-between items-center p-6 w-[30%] min-h-[20rem] shadow-md m-auto mt-[10%] bg-black bg-opacity-80 rounded-sm"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl text-white">SIGNUP</h1>
      <input
        ref={emailRef}
        type="email"
        className="border-b border-gray-400 bg-transparent w-full p-2 text-white placeholder-gray-300 outline-none focus:border-orange-500"
        placeholder="Email"
        onChange={() => emailRef.current?.value}
      />
      <input
        ref={passwordRef}
        type="password"
        className="border-b border-gray-400 bg-transparent w-full p-2 text-white placeholder-gray-300 outline-none focus:border-orange-500"
        placeholder="Password"
        onChange={() => passwordRef.current?.value}
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
