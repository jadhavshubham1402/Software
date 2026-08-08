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
import { GoogleLogin } from "@react-oauth/google";

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ===============================
  // EMAIL LOGIN
  // ===============================
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!loginData.email || !loginData.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginData.email,
            password: loginData.password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Invalid email or password.");
        return;
      }

      localStorage.setItem("token", result.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(result.data.user)
      );

      onContinue();
    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // EMAIL SIGN UP
  // ===============================
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !signupData.fullName ||
      !signupData.email ||
      !signupData.password
    ) {
      setError("Name, email and password are required.");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (signupData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const nameParts = signupData.fullName.trim().split(" ");

      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ");

      const response = await fetch(
        "http://127.0.0.1:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email: signupData.email,
            password: signupData.password,
            mobile: signupData.phone,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Registration failed.");
        return;
      }

      if (result.data?.token) {
        localStorage.setItem(
          "token",
          result.data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(result.data.user)
        );
      }

      onContinue();
    } catch (error) {
      console.error("Signup error:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // GOOGLE LOGIN
  // ===============================
  const handleGoogleSuccess = async (credentialResponse) => {
    setError("");

    if (!credentialResponse?.credential) {
      setError("Google authentication failed.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:5000/api/auth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credential: credentialResponse.credential,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setError(
          result.message || "Google authentication failed."
        );
        return;
      }

      localStorage.setItem(
        "token",
        result.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(result.data.user)
      );

      onContinue();
    } catch (error) {
      console.error("Google login error:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">
        Login / Sign Up
      </h2>

      <p className="text-white/60 mt-2">
        Secure your order before payment.
      </p>

      {/* Tabs */}
      <div className="grid grid-cols-2 mt-8 bg-white/5 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => {
            setActiveTab("login");
            setError("");
          }}
          className={`py-3 font-semibold ${
            activeTab === "login"
              ? "bg-cyan-500 text-white"
              : "text-white/70"
          }`}
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("signup");
            setError("");
          }}
          className={`py-3 font-semibold ${
            activeTab === "signup"
              ? "bg-cyan-500 text-white"
              : "text-white/70"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* LOGIN */}
      {activeTab === "login" && (
        <form
          onSubmit={handleLogin}
          className="space-y-5 mt-8"
        >
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 rounded-xl py-3 text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}

      {/* SIGNUP */}
      {activeTab === "signup" && (
        <form
          onSubmit={handleSignup}
          className="space-y-5 mt-8"
        >
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 rounded-xl py-3 text-white font-semibold disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-red-400 text-sm mt-4 text-center">
          {error}
        </p>
      )}

      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-white/10" />

        <span className="text-white/50 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Google */}
      <div className="w-full flex justify-center">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => {
            setError("Google authentication failed.");
          }}
        />
      </div>

      {/* Footer */}
      <div className="flex gap-4 mt-10">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 border border-white/10 rounded-xl py-3 text-white flex justify-center items-center gap-2"
        >
          <FaArrowLeft />
          Back
        </button>

        <button
          type="button"
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

const Input = ({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
      {icon}
    </div>

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