import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import { COLORS } from '../../constant';

const DateTime = ({setDateTimeConfirm,dateTimeConfirm,date,time,setDate,setTime}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [dateConfirm, setDateConfirm] = useState(false);
  const [timeConfirm, setTimeConfirm] = useState(false);
  const [counter,setCounter] = useState(0);

  const handleDateChange = (event, selectedDate) => {
    if (event.type === "set") {
      setDate(selectedDate);
      setDateConfirm(!dateConfirm);
      if(counter === 2)setCounter(2);
      else setCounter(1);
    }
    setShowDatePicker(false);
  };

  const handleTimeChange = (event, selectedTime) => {
    if (event.type === "set") {
      setTime(selectedTime);
      setTimeConfirm(!timeConfirm);
      if(counter === 1)setCounter(2);
      else setCounter(1);
    }
    setShowTimePicker(false);
  };

  useEffect(()=>{  
    if(counter===2)
    {
      setDateTimeConfirm(!dateTimeConfirm);
      setCounter(0);
    }
  },[counter,setDateConfirm,setTimeConfirm])

  const formattedTime = timeConfirm
    ? `${time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).replace(':', ' : ')}${
        time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).split(':')[0] >= 12 ? ' pm' : ' am'
      }`
    : 'Select Time';

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };

  return (
    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between',gap:10}}>
      <TouchableOpacity
        style={{
          width: '50%',
          alignItems: 'center',
          backgroundColor: COLORS.s1,
          padding: 10,
          borderRadius: 15,
        }}
        onPress={toggleDatePicker}
      >
        <Text style={{ color: COLORS.p1, fontWeight: 'bold' }}>{dateConfirm ? date.toDateString() : 'Select date'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '45%',
          alignItems: 'center',
          backgroundColor: COLORS.s1,
          padding: 10,
          borderRadius: 15,
        }}
        onPress={toggleTimePicker}
      >
        <Text style={{ color: COLORS.p1, fontWeight: 'bold' }}>{formattedTime}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DatePicker value={date} onChange={(event, date) => handleDateChange(event, date)} mode="date" is24Hour />
      )}
      {showTimePicker && (
        <DatePicker value={date} onChange={(event, time) => handleTimeChange(event, time)} mode="time" display="spinner" />
      )}
    </View>
  );
};

export default DateTime;
