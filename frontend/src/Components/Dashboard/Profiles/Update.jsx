import quotes from "./Quotes";
import baby from "../../../assets/baby-girl.jpg";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    eMail: "",
    addharNumber: "",
    moNumber: "",
    parentMoNumber: "",
    currentAddress: "",
    parmanentAddress: "",
    gender: "",
    doBirth: "",
    datetime: "",
  });

  // Initialize state for form data
  const [formData, setFormData] = useState({ ...student });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/students/student/${id}`
      );
      setStudent(result.data);
      setFormData(result.data); // Initialize form data with fetched student data
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/students/update/${id}`, formData);
      setStudent(formData);
      setIsEditing(false); // Exit edit mode on successful save
      navigate(`/dashboard/user-details/${id}`); // Redirect or notify success
    } catch (error) {
      console.error("Error updating student data:", error);
    }
  };

  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
      <div className="flex flex-col">
        {/* User Cover IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem] rounded-2xl"
        />

        {/* User Profile Image */}
        <div className="w-full mx-auto flex justify-center">
          <img
            src={baby}
            alt="User Profile"
            className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]"
          />
        </div>

        <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
          {/* FullName */}
          <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">
            {`${formData.firstName} ${formData.lastName}`}
          </h1>

          {/* About */}
          <p className="w-full text-gray-700 dark:text-gray-400 text-md text-pretty sm:text-center xs:text-justify">
            {randomQuote}
          </p>

          {/* Form for Editing Details */}
          {isEditing ? (
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        First Name
                      </dt>
                      <dd>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Last Name
                      </dt>
                      <dd>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Date Of Birth
                      </dt>
                      <dd>
                        <input
                          type="date"
                          name="doBirth"
                          value={formData.doBirth}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Gender
                      </dt>
                      <dd>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </dd>
                    </div>
                    {/* Add more fields as needed */}
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Father&apos;s Name
                      </dt>
                      <dd>
                        <input
                          type="text"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Mobile Number
                      </dt>
                      <dd>
                        <input
                          type="text"
                          name="moNumber"
                          value={formData.moNumber}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Parent&apos;s Phone Number
                      </dt>
                      <dd>
                        <input
                          type="text"
                          name="parentMoNumber"
                          value={formData.parentMoNumber}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Registration Date and Time
                      </dt>
                      <dd>
                        <input
                          disabled
                          type="datetime-local"
                          name="datetime"
                          value={formData.datetime}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    {/* Add more fields as needed */}
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Current Location
                      </dt>
                      <dd>
                        <input
                          type="text"
                          name="currentAddress"
                          value={formData.currentAddress}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Parmanent Location
                      </dt>
                      <dd>
                        <input
                          type="text"
                          name="parmanentAddress"
                          value={formData.parmanentAddress}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <dd>
                        <input
                          type="eMail"
                          name="eMail"
                          value={formData.eMail}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Aadhaar Number
                      </dt>
                      <dd>
                        <input
                          disabled
                          type="text"
                          name="addharNumber"
                          value={formData.addharNumber}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                        />
                      </dd>
                    </div>
                    {/* Add more fields as needed */}
                  </dl>
                </div>
              </div>
              <button
                onClick={handleSave}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    {/* Display student details */}
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        First Name
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.currentAddress}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Last Name
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.lastName}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Date Of Birth
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.doBirth}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Gender
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.gender}
                      </dd>
                    </div>
                    {/* Add more fields as needed */}
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Parents Name
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.fatherName}
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Phone Number
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.moNumber}
                      </dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Parent&apos;s Phone Number
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.parentMoNumber}
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Admission Date/Time
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.datetime}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Current Location
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.currentAddress}
                      </dd>
                    </div>
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Parmanent Location
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.parmanentAddress}
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <dd className="text-lg font-semibold">{student.eMail}</dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Addhar Number
                      </dt>
                      <dd className="text-lg font-semibold">
                        {student.addharNumber}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Edit Details
              </button>
            </div>
          )}

          {/* Social Links */}
          <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
            <a href="https://www.linkedin.com">
              <div className="p-2 hover:text-primary hover:dark:text-primary">
                <svg
                  className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </div>
            </a>
            <a href="https://twitter.com">
              <div className="p-2 hover:text-primary hover:dark:text-primary">
                <svg
                  className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </div>
            </a>
            <a href="">
              <div className="p-2 hover:text-blue-500 hover:dark:text-blue-500">
                <svg
                  className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <a href="https://www.youtube.com">
              <div className="p-2 hover:text-primary hover:dark:text-primary">
                <svg
                  className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-red-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
