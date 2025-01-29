import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  interface LoginPayloadTypes {
    email: string;
    password: string;
  }

  const handleLogin = async () => {
    const payload: LoginPayloadTypes = {
      email: emailRef.current ? emailRef.current.value : "",
      password: passwordRef.current ? passwordRef.current.value : "",
    };
    try {
      const { data }: any = await axios.post(
        "http://localhost:5002/v1/login",
        payload,
        {}
      );
      console.log("data:", data);
      localStorage.setItem("randomToken", data.token);
      alert(data.message);
      navigate("/");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during login";
      alert(errorMessage);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 justify-between items-center p-6 w-[30%] min-h-[20rem] shadow-md m-auto mt-[10%] bg-black bg-opacity-80 rounded-sm"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl text-white">LOGIN</h1>
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

export default Login;
