import React from 'react';

export default function Profile(props) {
  return (
    <div className={'profile {}'}>
      <h3>{props.month}</h3>
      <img className="avatar" src={props.img} alt="avatar" />
      <h3>{props.priority}</h3>
      <p>{props.description}</p>
    </div>
  );
}
