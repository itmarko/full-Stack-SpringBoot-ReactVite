import { useState, useEffect } from "react";

function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [days, setDays] = useState(getDaysInMonth(year, month));

  // Move the function definition to the top
  function getDaysInMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  useEffect(() => {
    setDays(getDaysInMonth(year, month));
  }, [year, month]);

  const handlePrevMonth = () => {
    let newYear = year;
    let newMonth = month - 1;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }

    setYear(newYear);
    setMonth(newMonth);
  };

  const handleNextMonth = () => {
    let newYear = year;
    let newMonth = month + 1;

    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setYear(newYear);
    setMonth(newMonth);
  };

  const getWeekday = (date) => {
    const weekday = new Date(year, month, date).getDay();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[weekday];
  };

  return (
    <div>
      <section className="relative bg-stone-50">
        <div className="bg-sky-400 w-full sm:w-40 h-40 rounded-full absolute top-1 opacity-20 max-sm:right-0 sm:left-56 z-0"></div>
        <div className="bg-emerald-500 w-full sm:w-40 h-24 absolute top-0 -left-0 opacity-20 z-0"></div>
        <div className="bg-purple-600 w-full sm:w-40 h-24 absolute top-40 -left-0 opacity-20 z-0"></div>
        <div className="w-full py-24 relative z-10 backdrop-blur-3xl">
          <div className="w-full max-w-7xl mx-auto px-2 lg:px-8">
            <div className="grid grid-cols-12 gap-8 max-w-4xl mx-auto xl:max-w-full">
              <div className="col-span-12 xl:col-span-5">
                <h2 className="font-manrope text-3xl leading-tight text-gray-900 mb-1.5">
                  Upcoming Events
                </h2>
                <p className="text-lg font-normal text-gray-600 mb-8">
                  Don’t miss schedule
                </p>
                <div className="flex gap-5 flex-col">
                  {/* Your events component here */}
                </div>
              </div>
              <div className="col-span-12 xl:col-span-7 px-2.5 py-5 sm:p-8 bg-gradient-to-b from-white/25 to-white xl:bg-white rounded-2xl max-xl:row-start-1">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <h5 className="text-xl leading-8 font-semibold text-gray-900">
                      {new Date(year, month).toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h5>
                    <div className="flex items-center">
                      <button
                        className="text-indigo-600 p-1 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600"
                        onClick={handlePrevMonth}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                            stroke="currentcolor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <button
                        className="text-indigo-600 p-1 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600"
                        onClick={handleNextMonth}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6.00236 3.99707L10.0025 7.99723L6 11.999"
                            stroke="currentcolor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-indigo-600 p-1 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600">
                      Today
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day, index) => (
                      <div
                        key={index}
                        className="text-center text-gray-600 text-sm"
                      >
                        {day}
                      </div>
                    )
                  )}
                  {Array.from({ length: getWeekday(1) }, (_, i) => (
                    <div
                      key={i}
                      className="text-center text-gray-600 text-sm"
                    ></div>
                  ))}
                  {Array.from({ length: days }, (_, i) => (
                    <div
                      key={i}
                      className="text-center text-gray-600 text-sm hover:bg-indigo-600 hover:text-white rounded-full transition-all duration-300"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Calendar;
