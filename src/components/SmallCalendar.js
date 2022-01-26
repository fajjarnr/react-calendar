import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import { getMonth } from '../util';
import GlobalContext from '../context/GlobalContext';

export default function SmallCalendar() {
  const [currentMonthIndx, setCurrentMonthIndx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndx));
  }, [currentMonthIndx]);

  function handlePrevMonth() {
    setCurrentMonthIndx(currentMonthIndx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIndx(currentMonthIndx + 1);
  }

  const { monthIndex, setSmallCalendarMonth, setSelectedDay, selectedDay } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndx(monthIndex);
  }, [monthIndex]);

  function getCurrentDay(day) {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const curDay = day.format(format);
    const slcDay = selectedDay && selectedDay.format(format);
    if (nowDay === curDay) {
      return 'bg-blue-500 text-white rounded-full';
    } else if (curDay === slcDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    } else {
      return '';
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-grey-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndx)).format(
            'MMMM YYYY'
          )}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-5">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIndx);
                  setSelectedDay(day);
                }}
                className={`py-1 w-full ${getCurrentDay(day)}`}
              >
                <span className="text-sm">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
