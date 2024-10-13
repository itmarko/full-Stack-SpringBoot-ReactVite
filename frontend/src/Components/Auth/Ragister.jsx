import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/bg-image.jpg";
import { useState } from "react";
import axios from "axios";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    moNum: "",
    passWord: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.passWord !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Log formData for debugging
    console.log("Form data:", formData);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/create-user-account",
        formData
      );
      console.log("Registration successful:", response.data);
      alert("Registration successful");
      navigate("/log-in")

    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      alert("Registration failed: " + (error.response?.data || error.message));
    }
  };

  return (
    <>
      <div className="relative">
        <div className="h-[250px]">
          <img
            className="h-full w-full object-cover"
            src={bg}
            alt="Background"
          />
        </div>
        <div className="relative -mt-[8rem] m-4">
          <form
            onSubmit={handleSubmit}
            className="bg-fuchsia-50 max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl"
          >
            <div className="mb-12">
              <h2 className="text-gray-800 text-3xl font-bold text-center">
                Create Your Account
              </h2>
            </div>
            {["userName", "fullName", "email", "moNum"].map((field, idx) => (
              <div key={idx}>
                <label
                  htmlFor={field}
                  className="text-gray-800 text-xm block mb-2 my-3"
                >
                  {field.replace(/([A-Z])/g, " $1").toUpperCase()}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-2 outline-none"
                  placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="password"
                className="text-gray-800 text-xm block mb-2 my-3"
              >
                Password
              </label>
              <input
                type="passWord"
                id="passWord"
                name="passWord"
                value={formData.passWord}
                onChange={handleChange}
                autoComplete="off"
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-2 outline-none"
                placeholder="Password"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-gray-800 text-xm block mb-2 my-3"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="off"
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-2 outline-none"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex items-center mt-8">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
                className="h-4 w-4 shrink-0 rounded"
              />
              <label htmlFor="termsAccepted" className="ml-3 block text-sm">
                I accept the{" "}
                <Link 
                  to ="/termsAndConditions"
                className="text-blue-500 font-semibold hover:underline">
                  Terms and condition
                </Link>
              </label>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-black
                bg-gradient-to-br from-blue-600 via-teal-400 to-purple-600
                hover:bg-gradient-to-r hover:from-pink-600 hover:to-blue-800 hover:text-white
                focus:outline-none transition-all"
              >
                Register
              </button>
              <p className="text-center text-sm mt-6 text-gray-800">
                Already have an account?
                <Link
                  className="text-blue-500 font-semibold hover:underline ml-1"
                  to="/log-in"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
