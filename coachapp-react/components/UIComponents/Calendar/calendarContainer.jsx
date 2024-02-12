import React, { useState } from 'react';
import TimeSlot from '@/components/UIComponents/Calendar/'

export default function CalendarContainer() {
    const [selectedTime, setSelectedTime] = useState(null);
  
    const handleSelectTime = (time) => {
      setSelectedTime(time);
    };

    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour <= 17; hour++) {
            for (let minute = 0; minute < 60; minute += 60) {
                const time = `${hour}:${minute === 0 ? '00' : minute}`;
                slots.push({
                    key:time,
                    time:time,
                    onselect:handleSelectTime,
                    selected:selectedTime,
                })
            }
        }
        return slots;
    };
    const slots = generateTimeSlots();
    return(
        <Calendar time={slots} selectedTime={selectedTime} handleSelectTime={handleSelectTime}/>
    )
  
}