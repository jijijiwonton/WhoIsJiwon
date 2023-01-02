import React, { useState } from 'react';
import Todo from '../status/Todo';
import Progress from '../status/Progress';
import Completed from '../status/Completed';

export default function Profile(props) {
  const progressionCheck = () => {
    // eslint-disable-next-line default-case
    switch (props.status) {
      case 'todo':
        return <Todo />;
      case 'progress':
        return <Progress />;
      case 'completed':
        return <Completed />;
    }
  };
  return (
    <div className={`profile ${props.month}`}>
      <h3>{props.month}</h3>
      <img className="avatar" src={props.img} alt="avatar" />
      <span className={props.status}>{progressionCheck()}</span>
      <h3>{props.priority}</h3>
      <p>{props.description}</p>
    </div>
  );
}
