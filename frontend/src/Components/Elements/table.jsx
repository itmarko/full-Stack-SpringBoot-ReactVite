import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const StudentView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/students", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setStudents(result.data);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/students/delete/${id}`);
    loadStudents();
  };
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-left bg-gray-100 border-b uppercase">
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">SNO.</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">ID</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">First Name</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Last Name</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Father Name</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Email</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Addhar Number</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Mobile Number</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Parent Mo. Number</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Gender</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Admission Date/Time</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">DOB</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Current Address</th>
              <th scope="col" className="py-5 px-10 font-semibold text-gray-700">Parmanent Address</th>

              <th scope="col" className="py-5 px-10 font-semibold text-gray-700" colSpan={3}>Actions</th>
            </tr>
        </thead>
        <tbody className="text-center">
            {students
              .filter(
                (st) =>
                  st.firstName.toLowerCase().includes(search) ||
                  st.lastName.toLowerCase().includes(search) ||
                  st.email.toLowerCase().includes(search) ||
                  st.department.toLowerCase().includes(search) ||
                  (st.moNumber && st.moNumber.toString().includes(search))
              )

              .map((student, index) => (
                <tr key={student.id} className="text-center ">
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td className="text-gray-700">{student.id}</td>
                  <td className="text-gray-700">{student.firstName}</td>
                  <td className="text-gray-700">{student.lastName}</td>
                  <td className="text-gray-700">{student.fatherName}</td>
                  <td className="text-gray-700">{student.eMail}</td>
                  <td className="text-gray-700">{student.addharNumber}</td>
                  <td className="text-gray-700">{student.moNumber}</td>
                  <td className="text-gray-700">{student.parentMoNumber}</td>
                  <td className="text-gray-700">{student.gender}</td>
                  <td className="text-gray-700">{student.datetime}</td>
                  <td className="text-gray-700">{student.doBirth}</td>
                  <td className="text-gray-700">{student.currentAddress}</td>
                  <td className="text-gray-700">{student.parmanentAddress}</td>
                  <td className="text-gray-700 mx-2" >
                    <Link
                      to={`/student-profile/${student.id}`}
                      className="flex text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      <FaEye />
                    </Link>
                  </td>
                  <td className="mx-2">
                    <Link
                      to={`/edit-student/${student.id}`}
                      className="flex text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      <FaEdit />
                    </Link>
                  </td>
                  <td className="mx-2">
                    <button
                      className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => handleDelete(student.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
    </table>
</div>

  );
};

export default StudentView;
