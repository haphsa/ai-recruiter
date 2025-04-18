'use client'
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = ['5', '6', '7', '8', '9', '10', '11'];

  const events = [
    { day: 'Mon', time: '9:00 AM', title: '2nd HR interview' },
    { day: 'Tue', time: '2:00 PM', title: 'Meeting with DevZ' },
    { day: 'Wed', time: '1:00 PM', title: 'Design Review' },
    { day: 'Thu', time: '2:00 PM', title: 'Interview with buzz' },
    { day: 'Fri', time: '10:00 AM', title: '1st interview' },
  ];

  const getEvent = (day, time) => {
    return events.find(e => e.day === day && e.time === time);
  };

  const hours = Array.from({ length: 9 }, (_, i) => `${i + 7}:00 AM`).concat([
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
  ]);

  return (
    <main className="tab-calendar p-8">
      <h1 className="text-2xl font-semibold">Calendar</h1>
      <div className="pt-10 pr-15 pl-15">
        <div className="flex items-center gap-4 mb-6 gap-4 bottomline">
          <h1 className="imp-text">January 2025</h1>
        </div>
        <div className="flex justify-center items-center pl-35">
          <div className="border rounded-[15px] calendar-container w-full max-w-screen-lg">
            <div className="flex justify-center space-x-6 p-4">
              {['Day', 'Week', 'Month', 'Year'].map(view => (
                <button
                  key={view}
                  className={`px-4 py-1 rounded-full ${
                    view === 'Week' ? 'bg-black text-white' : 'font-var(--foreground)'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>

            {/* Calendar Grid Container */}
            <div className="grid grid-cols-[80px_repeat(7,1fr)_80px] text-sm">
              {/* Time Slots Section */}
              <div className="overflow-y-auto max-h-[calc(100vh-200px)] col-span-9">
                {/* Header Row for Days */}
                <div className="grid grid-cols-[80px_repeat(7,1fr)_80px] text-sm">
                  <div />
                  {days.map((day, i) => (
                    <div
                      key={day}
                      className={`h-16 border border-gray-300 overflow-hidden pl-3 font-var(--foreground) ${
                        i === 0 ? 'weekend' : i === 6 ? 'weekend' : i === 3 ? 'selected' : 'weekday'
                      }`}
                    >
                      <div>
                        <div className="text-2sm">{day}</div>
                        <div className="text-lg font-bold">{dates[i]}</div>
                      </div>
                    </div>
                  ))}

                  <div className="font-var(--foreground) text-xs flex items-center justify-center">EST<br />GMT-5</div>
                </div>

                {/* Hourly Rows */}
                {hours.map(hour => (
                  <div key={hour} className="grid grid-cols-[80px_repeat(7,1fr)_80px] text-sm">
                    {/* Time label */}
                    <div className="text-xs text-right pr-2 py-3 font-var(--foreground) pb-5">{hour}</div>

                    {/* Columns for each day */}
                    {days.map((day, idx) => {
                      const event = getEvent(day, hour);
                      return (
                        <div
                          key={day + hour}
                          className={`relative bg-var-(--background) h-16 border border-gray-300 border-opacity-50 overflow-hidden ${
                            idx === 0 ? 'weekend' : idx === 6 ? 'weekend' : idx === 3 ? 'selected' : 'weekday'
                          }`}
                        >
                          {event && (
                            <div className="absolute top-0 left-0 w-full h-full p-1 bg-white shadow rounded px-2 py-1 border-l-4 border-black text-xs">
                              <div className="font-bold text-black">
                                {event.time}
                                <span className="inline-block w-2 h-2 bg-black rounded-full ml-1" />
                              </div>
                              <div>{event.title}</div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Right EST/GMT */}
                    <div className="font-var(--foreground) text-xs flex items-center justify-center">{hour}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-6 p-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
