import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Search from "../../Search/SearchStudent";
import Popup from "../../Elements/popups/PopupDelete";
import { createPortal } from "react-dom";

const StudentView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();

  const pageSize = 10;

  useEffect(() => {
    // Check session status before loading students
    const isLoggedIn = sessionStorage.getItem("userToken"); // Example token check
    if (!isLoggedIn) {
      navigate("/log-in"); // Redirect to login if not authenticated
    } else {
      loadStudents();
    }
  }, [currentPage, search]);

  const loadStudents = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/users/students`,
        {
          params: {
            page: currentPage,
            size: pageSize,
            search: search || "",
          },
          validateStatus: () => true,
          withCredentials: true,
        }
      );

      if (result.status === 200) {
        setStudents(result.data.students);
        setTotalRecords(result.data.totalRecords);
        setTotalPages(Math.ceil(result.data.totalRecords / pageSize));
      } else {
        console.error("Error fetching students:", result.status, result.statusText);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/students/delete/${id}`);
      loadStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    } finally {
      setIsPopupOpen(false);
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
      handleDelete(studentId);
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
            {/* Table Header */}
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">SNO.</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">ID</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">First Name</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">Last Name</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">Email</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">Addhar Number</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">Mobile Number</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">Gender</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">Admission Date/Time</th>
            <th className="py-1 px-5 font-semibold text-gray-950 text-sm">DOB</th>
            <th className="py-1 px-5 font-bold text-lg text-gray-700 text-center" colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students?.map((student, index) => (
            <tr key={student.id} className="text-center">
              <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
              <td className="text-gray-900">{student.id}</td>
              <td className="text-gray-900">{student.firstName}</td>
              <td className="text-gray-900">{student.lastName}</td>
              <td className="text-gray-900">{student.eMail}</td>
              <td className="text-gray-900">{student.addharNumber}</td>
              <td className="text-gray-900">{student.moNumber}</td>
              <td className="text-gray-900">{student.gender}</td>
              <td className="text-gray-900">{student.datetime}</td>
              <td className="text-gray-900 uppercase">{student.doBirth}</td>
              <td className="text-gray-900">
                <Link to={`/dashboard/user-details/${student.id}`} className="flex text-white bg-teal-600 hover:bg-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link to={`/dashboard/edit-details/${student.id}`} className="flex text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button type="button" className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleOpenPopup(student.id)}>
                  <FaTrashAlt />
                </button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} onConfirm={handleConfirmDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isPopupOpen && createPortal(
        <Popup onClose={handleClosePopup} onConfirmDelete={handleConfirmDelete} />,
        document.body
      )}
      <div>
        <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, totalRecords)} of {totalRecords}
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button className="px-3 h-8 leading-tight text-gray-100 bg-gray-700 rounded-l-lg disabled:bg-gray-200" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i + 1}>
                <button className={`px-3 h-8 leading-tight text-gray-100 ${currentPage === i + 1 ? "bg-blue-600" : "bg-gray-700"}`} onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button className="px-3 h-8 leading-tight text-gray-100 bg-gray-700 rounded-r-lg disabled:bg-gray-200" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
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
