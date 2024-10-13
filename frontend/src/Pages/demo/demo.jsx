import { Link } from "react-router-dom";
import bg from "../../assets/bg-image.jpg";
import axios from "axios";
function Registration() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      userName: formData.get('userName'),
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobileNumber: formData.get('mobileNumber'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    };

    try {
      const response = await axios.post('/api/users/create-user-account', userData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="relative">
        <div className="h-[250px]">
          <img className="h-full w-full object-cover" src={bg} alt="" />
        </div>
        <div className="relative -mt-[8rem] m-4 ">
          <form onSubmit={handleSubmit}
            className="bg-fuchsia-50 max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]
          p-8 rounded-2xl"
          >
            <div className="mb-12">
              <h2 className="text-gray-800 text-3xl font-bold text-center">
                Create Your Account
              </h2>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-gray-800 text-xm block mb-2 my-3"
              >
                UserName
              </label>
              <input
                type="text"
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300
              focus:border-blue-500 px-2 py-2 outline-none"
                placeholder="Enter User Name"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-gray-800 text-xm block mb-2 my-3"
              >
                Full Name
              </label>
              <input
                type="text"
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300
              focus:border-blue-500 px-2 py-2 outline-none"
                placeholder="Enter Full Name"
              />
            </div>
            <div className=" items-center ">
              <label
                htmlFor=""
                className="text-gray-800 text-xm block mb-2 my-3"
              >
                Email
              </label>
              <input
                placeholder="Enter Your Email"
                type="Email"
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300
              focus:border-blue-500 px-2 py-2 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-gray-800 text-xm block mb-2 my-3"
              >
                Mobile No.
              </label>
              <input
                placeholder="Mobile Number"
                type="text"
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300
              focus:border-blue-500 px-2 py-2 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-gray-800 text-xm block mb-2 my-3"
              >
                Password
              </label>
              <input
                placeholder="Password"
                type="password"
                autoComplete="off"
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300
              focus:border-blue-500 px-2 py-2 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-gray-800 text-xm block mb-2 my-3"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                autoComplete="off"
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300
              focus:border-blue-500 px-2 py-2 outline-none"
              />
            </div>
            <div className="flex items-center mt-8">
              <input
                type="checkbox"
                id="remeber-me"
                name="remember-me "
                className="h-4 w-4 shrink-0 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm">
                I accept the{" "}
                <Link className="text-blue-500 font-semibold hover:underline">
                  Terms and condition
                </Link>
              </label>
            </div>
            <div className="mt-8">
              <button
                type="button"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-black
                 bg-gradient-to-br  from-blue-600 via-teal-400 to-purple-600
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
