import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    email: "",
    addharNumber: "",
    moNumber: "",
    parentMoNumber: "",
    currentAddress: "",
    parmanentAddress: "",
    gender: "",
    doBirth: "",
    date: "",
    time:"",
  });

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/api/auth/students",
        {
          ...student,
          DoBirth: student.doBirth, // Ensure casing matches the backend
        },
        { withCredentials: true }
      );

      setMessage("Student added successfully");
      navigate("/dashboard/students");
      console.log("Form data submitted:", student);
      setStudent({
        // Reset form fields after submission
        firstName: "",
        lastName: "",
        fatherName: "",
        email: "",
        addharNumber: "",
        moNumber: "",
        parentMoNumber: "",
        currentAddress: "",
        parmanentAddress: "",
        gender: "",
        doBirth: "",
        date: "",
        time:"",
      });
    } catch (error) {
      console.error(error);
      setMessage(
        "Error adding student: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleAddStudent} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={student.firstName}
              onChange={handleInputChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John"
              required
            />
          </div>
          <div className="relative">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={student.lastName}
              onChange={handleInputChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="fatherName"
          >
            Father&apos;s Name
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={student.fatherName}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Michael"
          />
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="addharNumber"
          >
            Aadhaar Number
          </label>
          <input
            type="text"
            id="addharNumber"
            name="addharNumber"
            value={student.addharNumber}
            minLength={12}
            maxLength={14}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="1234-5678-9101"
          />
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="moNumber"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="moNumber"
            name="moNumber"
            minLength={10}
            maxLength={13}
            value={student.moNumber}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="9876543210"
          />
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="parentMoNumber"
          >
            Parent&apos;s Mobile Number
          </label>
          <input
            type="text"
            id="parentMoNumber"
            name="parentMoNumber"
            maxLength={10}
            value={student.parentMoNumber}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="0987654321"
          />
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="currentAddress"
          >
            Current Address
          </label>
          <input
            type="text"
            id="currentAddress"
            name="currentAddress"
            value={student.currentAddress}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="123 Main St, City, State, ZIP"
          />
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="parmanentAddress"
          >
            Permanent Address
          </label>
          <input
            type="text"
            id="parmanentAddress"
            name="parmanentAddress"
            value={student.parmanentAddress}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="456 Elm St, City, State, ZIP"
          />
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={student.gender}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="doBirth"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="doBirth"
            name="doBirth"
            value={student.doBirth}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="datetime"
          >
            Date and Time
          </label>
          <input
            // type="datetime-local"
            type="date"
            id="date"
            name="date"
            value={student.date}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="datetime"
          >
          Time
          </label>
          <input
            // type="datetime-local"
            type="time"
            id="time"
            name="time"
            value={student.time}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
