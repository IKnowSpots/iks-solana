"use client"
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const renderCalendar = () => {
    const daysInMonth = currentDate.daysInMonth();
    const firstDayOfMonth = moment(currentDate).startOf('month').day();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDay = day === moment().date() && currentDate.isSame(moment(), 'month');
      days.push(
        <div
          key={day}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            isCurrentDay ? 'bg-blue-500 text-white' : ''
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className=" mt-8">
      <div className="bg-[#3C3C3C] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-none text-center pb-4">
        <h2 className="text-lg font-semibold">{currentDate.format('MMMM YYYY')}</h2>
      </div>
      <div className="bg-[#3C3C3C] rounded-tl-none rounded-tr-none rounded-bl-3xl rounded-br-3xl p-6 grid grid-cols-7 gap-2">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
