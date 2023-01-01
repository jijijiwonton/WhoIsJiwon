import React from 'react';

export default function Profile(props) {
  return (
    <div className="profile">
      <img className="avatar" src={props.img} alt="avatar" />
      <h2>Jiwon Hwang</h2>
      <h3>{props.job}</h3>
      <p>{props.description}</p>
    </div>
  );
}
