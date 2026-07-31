import React, { useState } from "react";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const LoginSignup = ({ onBack, onContinue }) => {
  const [activeTab, setActiveTab] = useState("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // API Call Here

    onContinue();
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // API Call Here

    onContinue();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">Login / Sign Up</h2>

      <p className="text-white/60 mt-2">Secure your order before payment.</p>

      {/* Tabs */}

      <div className="grid grid-cols-2 mt-8 bg-white/5 rounded-xl overflow-hidden">
        <button
          onClick={() => setActiveTab("login")}
          className={`py-3 font-semibold ${
            activeTab === "login" ? "bg-cyan-500 text-white" : "text-white/70"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setActiveTab("signup")}
          className={`py-3 font-semibold ${
            activeTab === "signup" ? "bg-cyan-500 text-white" : "text-white/70"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* LOGIN */}

      {activeTab === "login" && (
        <form onSubmit={handleLogin} className="space-y-5 mt-8">
          <Input
            icon={<FaEnvelope />}
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                email: e.target.value,
              })
            }
          />

          <Input
            type="password"
            icon={<FaLock />}
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
          />

          <button className="w-full bg-cyan-500 rounded-xl py-3 text-white font-semibold">
            Login
          </button>
        </form>
      )}

      {/* SIGNUP */}

      {activeTab === "signup" && (
        <form onSubmit={handleSignup} className="space-y-5 mt-8">
          <Input
            icon={<FaUser />}
            placeholder="Full Name"
            value={signupData.fullName}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                fullName: e.target.value,
              })
            }
          />

          <Input
            icon={<FaEnvelope />}
            placeholder="Email"
            value={signupData.email}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                email: e.target.value,
              })
            }
          />

          <Input
            icon={<FaPhone />}
            placeholder="Phone Number"
            value={signupData.phone}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                phone: e.target.value,
              })
            }
          />

          <Input
            type="password"
            icon={<FaLock />}
            placeholder="Password"
            value={signupData.password}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                password: e.target.value,
              })
            }
          />

          <Input
            type="password"
            icon={<FaLock />}
            placeholder="Confirm Password"
            value={signupData.confirmPassword}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                confirmPassword: e.target.value,
              })
            }
          />

          <button className="w-full bg-cyan-500 rounded-xl py-3 text-white font-semibold">
            Create Account
          </button>
        </form>
      )}

      {/* Divider */}

      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-white/10" />

        <span className="text-white/50 text-sm">OR</span>

        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Google */}

      <button className="w-full border border-white/10 rounded-xl py-3 flex justify-center items-center gap-3 text-white hover:bg-white/5">
        <FaGoogle />
        Continue with Google
      </button>

      {/* Footer */}

      <div className="flex gap-4 mt-10">
        <button
          onClick={onBack}
          className="flex-1 border border-white/10 rounded-xl py-3 text-white flex justify-center items-center gap-2"
        >
          <FaArrowLeft />
          Back
        </button>

        <button
          onClick={onContinue}
          className="flex-1 bg-cyan-500 rounded-xl py-3 text-white flex justify-center items-center gap-2"
        >
          Continue
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const Input = ({ icon, type = "text", placeholder, value, onChange }) => (
  <div className="relative">
    <div className="absolute left-4 top-4 text-cyan-400">{icon}</div>

    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
    />
  </div>
);

export default LoginSignup;
