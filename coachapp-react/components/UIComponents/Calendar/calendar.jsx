import CalendarComponent from '@/components/UIComponents/Calendar/calendar';
import React from 'react';
import styles from '@/styles/Home.module.css';
import TimeSlot from '@/components/UIComponents/Calendar/timeSlot';
import Calender from '@/components/UIComponents/Calendar/calendarContainer'

export default function Calendar({time, selectedTime, handleSelectTime}){
    return (
      <div className="calendar">
        <h1>Calendrier de Réservation</h1>
        <div className="time-slots">
        {time.map(prop => {
            <div key={prop.key}><TimeSlot
            key={prop.time}
            time={prop.time}
            onSelect={handleSelectTime}
            selected={selectedTime}
            /></div>
        })}
            
        </div>
        {selectedTime && (
          <div className="selected-time">
            <p>Créneau sélectionné : {selectedTime}</p>
          </div>
        )}
      </div>
    );
}