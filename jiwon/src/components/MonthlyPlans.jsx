import React from 'react';

export default function MonthlyPlans(props) {
  return (
    <div>
      <p>{props.first}</p>
      <p>{props.second}</p>
      <p>{props.third}</p>
      <p>{props.fourth}</p>
      <p>{props.fifth}</p>
    </div>
  );
}
