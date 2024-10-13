import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
// import userdata from "../../../public/User.json";
const Login = () => {
  const [identifier, setIdentifier] = useState(""); // This will accept both username or email
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("../../../public/User.json");
  //     const users = await response.json();
  //     const user = users.find(
  //       (user) =>
  //         (user.username === identifier || user.email === identifier) &&
  //         user.password === password
  //     );
  //     if (user) {
  //       setError("");
  //       login();

  //       navigate("/dashboard");
  //     } else {
  //       setError("Invalid username/email or password");
  //     }
  //   } catch (error) {
  //     setError("An Error occurred");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const userData = {
      userName: identifier, // Use username for login
      passWord: passWord, // Password to authenticate
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        userData
      );
      console.log("Login successful:", response.data);
      // Handle login success, e.g., redirect to dashboard
      login(); // Call your authentication context login method
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setError("Invalid username/email or password"); // Update error message
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Log In</h1>
              </div>
              <form onSubmit={handleLogin}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:taxt-lg sm:leading-7">
                    <div className="relative">
                      <input
                        className="peer placeholder-transparent
                      h-10 w-full border-b-2 border-gray-300  text-gray-900  focus:outline-none focus:borer-rose-600"
                        autoComplete="off"
                        id="identifier"
                        value={identifier}
                        name="email"
                        type="text"
                        placeholder="Email Adress"
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="identifier"
                        className=" absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Adress
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        placeholder="Password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900
                    focus:outline-none focus:borer-rose-600"
                        type="password"
                        id="password"
                        value={passWord}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="Password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440
                    peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        className="bg-gradient-to-br from-pink-600 to-orange-600 text-slate-100
                      hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-800 font-semibold py-1 px-5 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <p
                  className="text-red-700 py-1
                      "
                >
                  {error && <p>{error}</p>}
                </p>
              </form>
            </div>
            <div>
              <p className="text-gray-800 text-sm text-center py-2">
                New User ?
                <Link
                  to="/create-user-account"
                  className="text-green-600 font-semibold hover:underline ml-1"
                >
                  Create Account
                </Link>
              </p>
            </div>

            <div className="w-full justify-center">
              <button
                className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md
              px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48 48"
                  width="24px"
                  height="24px"
                  className="h-6 w-10 mr-2"
                >
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.5 0 5.7 1.5 7 2.7L37 7C33 4 28.5 2 24 2 14.5 2 7 9.5 7 19s7.5 17 17 17c8.5 0 15-6 15-15H24v-8h17c0 12.5-9 21-21 21S2 31.5 2 19 9.5 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M12.1 29.4c1.2 2.1 3.5 3.6 6 4.1s4.5.6 6.8 0c2.1-.5 4.1-1.4 5.7-2.6 1.6-1.2 2.9-2.8 4.1-4.5s2.2-3.7 2.5-5.7H24v-7.8c.2.1.4.1.6.2 1.2.2 2.4.7 3.4 1.4 1 .7 1.8 1.6 2.5 2.6s1.2 2.2 1.6 3.5c.3 1.1.5 2.2.5 3.3 0 .4-.1.8-.1 1.2 0 .4-.1.8-.1 1.2 0 1.7-.4 3.4-1 5-.5 1.6-1.3 3.1-2.4 4.4s-2.5 2.3-4 3.2c-1.5.8-3.2 1.4-5 1.7s-3.8.2-5.7-.3c-1.9-.5-3.6-1.4-5.2-2.5-.8-.6-1.5-1.2-2.2-1.9z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.1 29.4c-2-3.3-3-7.2-3-11 0-3.8 1-7.7 3-11.1C14.5 3.1 17.5 1 20.9 0 23.9 0 26.5.5 29 1.5c2.4 1 4.5 2.5 6.2 4.2 1.7 1.7 3 3.8 3.9 6.1 1 2.4 1.5 4.9 1.5 7.5 0 4-1 7.8-3 11.1-2 3.3-5 5.5-8.2 6.5-2.9.8-5.8 1.2-8.6 1-2.7-.3-5.3-1-7.5-2.2-2.2-1.1-4.1-2.8-5.6-4.8s-2.5-4.4-3-6.8z"
                  />
                  <path
                    fill="#EA4335"
                    d="M29 1.5C26.5.5 23.9 0 20.9 0 14.6 0 9 3.5 5.9 9.1c2.7-1.7 5.8-2.7 9-2.7h9.7c.3 0 .5.1.8.1-.1-.3-.1-.6-.1-.8 0-1.1.1-2.2.4-3.2.4-1.3 1-2.5 1.8-3.5 1-1.2 2.1-2.2 3.5-3 .5-.3 1.2-.5 1.9-.5.7-.1 1.3-.1 2-.1 1.1.2 2.1.4 3.2 1 1.1.6 2.1 1.5 3 2.6 1 .9 1.9 2.1 2.5 3.5.6 1.4 1 3 1 4.7 0 1.3-.3 2.5-.8 3.6-.6 1.1-1.4 2.1-2.4 2.9-1.1.9-2.4 1.6-3.7 2.2-1.4.6-2.8 1-4.3 1.2-1.4.2-2.8.1-4.2-.4-1.3-.4-2.5-1-3.6-1.8-1.1-.8-2.1-1.9-3-3.2-.9-1.3-1.6-2.8-2.1-4.4z"
                  />
                </svg>
                <span>Continue with google</span>
              </button>
            </div>
            <div className="w-full justify-center mt-1">
              <button
                className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md
              px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  className="h-6 w-6 mr-2"
                >
                  <path
                    fill="#4267B2"
                    d="M22,12C22,6.5,17.5,2,12,2S2,6.5,2,12c0,5,3.7,9.1,8.5,9.9v-7H8v-3h2.5V9.7c0-2.5,1.5-3.9,3.7-3.9c1.1,0,2,0.1,2.3,0.1v2.6h-1.6c-1.3,0-1.6,0.8-1.6,1.5v1.8h3.1l-0.5,3H14.3v7C19.3,21.1,22,17,22,12z"
                  />
                </svg>
                <span>Continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
