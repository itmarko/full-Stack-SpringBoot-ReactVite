import { useState, useEffect } from 'react';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const monthNames = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"];

  useEffect(() => {
    // Any initialization or side effects can be handled here
  }, []);

  const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0);
  const daysInMonth = (year) => {
    const februaryDays = isLeapYear(year) ? 29 : 28;
    return [31, februaryDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  };

  const getWeekdayOffset = (month) => {
    const firstDay = new Date(year, month, 1).getDay();
    return (firstDay === 0 ? 6 : firstDay - 1); // Adjust for Monday start
  };

  const generateDays = () => {
    const days = [];
    const monthDays = daysInMonth(year);
    monthDays.forEach((daysInThisMonth, month) => {
      const monthDaysArray = [];
      // Add empty slots for days before the first day of the month
      for (let i = 0; i < getWeekdayOffset(month); i++) {
        monthDaysArray.push('');
      }
      // Add actual days of the month
      for (let i = 1; i <= daysInThisMonth; i++) {
        monthDaysArray.push(i);
      }
      days.push(monthDaysArray);
    });
    return days;
  };

  const isToday = (day, month) => {
    const today = new Date();
    const dayDate = new Date(year, month, day);
    return today.toDateString() === dayDate.toDateString();
  };

  const isSunday = (day, month) => new Date(year, month, day).getDay() === 0;

  return (
    <div className="w-full p-2 m-2 bg-gray-100 rounded-lg shadow">
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap w-full h-12 p-1 m-1 text-xl font-bold bg-white rounded-lg shadow-lg">
          <div
            className="w-1/3 p-1 text-center text-green-900 shadow-md cursor-pointer hover:text-green-600 hover:shadow-inner bg-gray-50 rounded-l-md"
            onClick={() => setYear(year - 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="block w-6 h-8 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </div>
          <div className="w-1/3 p-1 text-center text-green-900 shadow-md bg-gray-50">
            {year}
          </div>
          <div
            className="w-1/3 p-1 text-center text-green-900 shadow-md cursor-pointer hover:text-green-600 hover:shadow-inner bg-gray-50 rounded-r-md"
            onClick={() => setYear(year + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="block w-6 h-8 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        {monthNames.map((month, index) => (
          <div key={index} className="p-1 m-1 font-sans bg-white rounded shadow-md lg:w-80 w-80 bg-blend-luminosity bg-gradient-to-b from-green-50 via-white to-green-50">
            <p className="p-1 text-xl font-semibold text-center text-indigo-800">{month}</p>
            <div className="p-1 m-1">
              <div className="grid grid-cols-7 font-semibold text-green-800 border-b-2">
                {dayNames.map((dayName, idx) => (
                  <div key={idx} className="grid place-items-center">
                    <p>{dayName}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 font-semibold text-center text-gray-800">
                {generateDays()[index].map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`${
                      isToday(day, index) ? 'ring-green-400 ring-4 rounded-full' : ''
                    } ${isSunday(day, index) ? 'text-red-600' : ''} hover:bg-green-100`}
                  >
                    <p>{day || ''}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
