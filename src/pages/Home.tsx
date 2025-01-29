import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [massterPassword, setMasterPassword] = React.useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const postMasterPassword = async () => {
    if (!emailRef.current?.value) {
      alert("Please enter an email");
      return;
    }
    try {
      const { data } = await axios.post(
        `http://localhost:5002/v1/generate-master-password`,
        { email: emailRef.current.value }
      );
      console.log("data:", data);
      setMasterPassword(data?.masterPassword);
    } catch (error: any) {
      console.log("error:", error);
      // alert(error.response.data.message);
    }
  };

  const handleEmail = () => {
    if (emailRef.current) {
      const value = emailRef.current.value;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMasterPassword("");
    navigate("/login");
  };

  return (
    <div className="border border-red-1 w-1/3 min-h-28 flex flex-col justify-center items-center mt-[10%] ml-auto mr-auto p-2">
      <input
        placeholder="Enter email"
        ref={emailRef}
        onChange={handleEmail}
        className="p-2 mt-2 mb-2 rounded-sm border border-purple-400 outline-none w-[90%]"
      />
      <h1>{massterPassword || "No masster password"}</h1>
      <button
        onClick={postMasterPassword}
        className="bg-purple-400 p-2 rounded-md text-white mt-2"
      >
        Generate
      </button>
      <button
        onClick={handleLogout}
        className="bg-black p-2 rounded-md text-white mt-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
