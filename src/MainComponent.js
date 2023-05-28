import dayjs from 'dayjs';
import * as React from 'react';

export const MainComponent = () => {
  const myGoalsArray = [
    {
      no: 1,
      name: 'Get Into Shape',
      deadline: '09/16/2023', //  mm/dd/yyyy
      message: 'Eat properly',
    },
    {
      no: 2,
      name: 'Python Perfection',
      deadline: '08/18/2023', //  mm/dd/yyyy
      message: 'be in intermediate level in Python',
    },
    {
      no: 3,
      name: 'SQL Perfection',
      deadline: '08/18/2023', //  mm/dd/yyyy
      message: 'Sql queries perfection',
    },
    {
      no: 4,
      name: 'Data Structure and Algorithms',
      deadline: '09/18/2023', //  mm/dd/yyyy
      message: 'perfect in programming',
    },
    {
      no: 5,
      name: 'Days in the Year',
      deadline: '12/31/2023', //  mm/dd/yyyy
      message: 'perfect in programming',
    },
  ];
  const date = dayjs().format('MM/DD/YYYY');
  console.log(date);

  var date_diff_indays = function (date1, date2) {
    console.log('inside here', date1, date2);
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  return (
    <div >
      <h1 style={{color:'red'}}>You Can</h1>
      <h4>Achievements / Goals to be done by September</h4>
      {myGoalsArray.map((item) => {
        return (
          <div
          className='main-container'
          >
            <p>{item.name}</p>
            <h1>{date_diff_indays(date, item.deadline)} days Left</h1>
          </div>
        );
      })}
      <h1 style={{color:'red'}}>Believe</h1>
    </div>
  );
};
