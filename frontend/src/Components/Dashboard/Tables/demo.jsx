import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Search from "../../Search/SearchStudent";
import Popup from "../../Elements/popups/Popup";
import { createPortal } from "react-dom";

const StudentView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPges] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [studentId, setStudentId] = useState(null);
  useEffect(() => {
    loadStudents();
  }, []);
  useEffect(() => {
    const totalStudent = students.length;
    const pageSize = 10;
    const totalPages = Math.ceil(totalStudent / pageSize);
    setTotalPges(totalPages);
  }, [students]);

  const paginatedStudents = students.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

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
    try {
      await axios.delete(`http://localhost:8080/students/delete/${id}`);
      // Optionally, refresh the list of students here
      loadStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    } finally {
      setIsPopupOpen(false); // Close the popup after the API call
    }
  };

  const handleOpenPopup = (id) => {
    setStudentId(id);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirmDelete = () => {
    if (studentId) {
      handleDelete(studentId); // Call the delete function with the student ID
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div>
        <Link to="/dashboard/add-students">
          <button className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-4.5 -4.5 24 24"
              width="24"
              fill="currentColor"
            >
              <path d="M8.9 6.9v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"></path>
            </svg>
            Add Student
          </button>
        </Link>
      </div>
      <Search search={search} setSearch={setSearch} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center bg-gray-100 border-b uppercase">
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              SNO.
            </th>
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              ID
            </th>
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              First Name
            </th>
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              Last Name
            </th>
            {/* <th scope="col" className="py-1 px-5 font-semibold text-gray-950 text-sm">Father Name</th> */}
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              Email
            </th>
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              Addhar Number
            </th>
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              Mobile Number
            </th>
            {/* <th scope="col" className="py-1 px-5 font-semibold text-gray-950 text-sm">Parent Mo. Number</th> */}
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              Gender
            </th>
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              Admission Date/Time
            </th>
            <th
              scope="col"
              className="py-1 px-5 font-semibold text-gray-950 text-sm"
            >
              DOB
            </th>
            {/* <th scope="col" className="py-1 px-5 font-semibold text-gray-950 text-sm">Current Address</th>
              <th scope="col" className="py-1 px-5 font-semibold text-gray-950 text-sm">Parmanent Address</th> */}

            <th
              scope="col"
              className="py-1 px-5 font-bold text-lg text-gray-700 text-center"
              colSpan={3}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {paginatedStudents
            .filter(
              (st) =>
                st.firstName?.toLowerCase().includes(search) ||
                st.lastName?.toLowerCase().includes(search) ||
                st.email?.toLowerCase().includes(search) ||
                st.department?.toLowerCase().includes(search) ||
                (st.moNumber && st.moNumber.toString().includes(search)) ||
                (st.id && st.id.toString().includes(search)) || // Search by id
                (st.addharNumber && st.addharNumber.toString().includes(search)) // Search by addharnumber
            )

            .map((student, index) => (
              <tr key={student.id} className="text-center ">
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td className="text-gray-900 ">{student.id}</td>
                <td className="text-gray-900 ">{student.firstName}</td>
                <td className="text-gray-900 ">{student.lastName}</td>
                {/* <td className="text-gray-900 ">{student.fatherName}</td> */}
                <td className="text-gray-900 ">{student.eMail}</td>
                <td className="text-gray-900 ">{student.addharNumber}</td>
                <td className="text-gray-900 ">{student.moNumber}</td>
                {/* <td className="text-gray-900 ">{student.parentMoNumber}</td> */}
                <td className="text-gray-900 ">{student.gender}</td>
                <td className="text-gray-900 ">{student.datetime}</td>
                <td className="text-gray-900  uppercase">{student.doBirth}</td>
                {/* <td className="text-gray-900 py-0">{student.currentAddress}</td>
                  <td className="text-gray-900 py-0">{student.parmanentAddress}</td> */}
                <td className="text-gray-900 py-0 mx-2 ">
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
                    className="flex text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  {/* <button
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => handleDelete(student.id)}
                  >
                    <FaTrashAlt />
                  </button> */}
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => handleOpenPopup(student.id)} // Pass the student ID here
                  >
                    <FaTrashAlt />
                  </button>
                  <Popup
                    isOpen={isPopupOpen}
                    onClose={handleClosePopup}
                    onConfirm={handleConfirmDelete}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isPopupOpen &&
        createPortal(
          <Popup
            onClose={handleClosePopup}
            onConfirmDelete={handleConfirmDelete}
          />,
          document.body
        )}
      <div>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing {(currentPage - 1) * 10 + 1} -{" "}
            {Math.min(currentPage * 10, students.length)} of {students.length}
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-100 bg-gray-700 border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed"
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                disabled={currentPage === 1}
                aria-disabled={currentPage === 1 ? "true" : undefined}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i + 1}>
                <a
                  href="#"
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    i + 1 === currentPage ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </a>
              </li>
            ))}
            <li>
              <button
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-100 bg-gray-800 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed"
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default StudentView;
