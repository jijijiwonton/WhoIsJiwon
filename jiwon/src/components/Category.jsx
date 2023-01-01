import React from 'react';
import ReactiveButton from 'reactive-button';

export default function Category() {
  return (
    <div className="container1">
      <ReactiveButton
        className="button"
        idleText={
          <span>
            <faReply /> QA Software Engineer
          </span>
        }
        color="yellow"
      />
      <ReactiveButton
        className="button"
        idleText={
          <span>
            <faReply /> Creator
          </span>
        }
        color="yellow"
      />{' '}
      <ReactiveButton
        className="button"
        idleText={
          <span>
            <faReply /> Developer
          </span>
        }
        color="yellow"
      />{' '}
      <ReactiveButton
        className="button"
        idleText={
          <span>
            <faReply /> Exuberant
          </span>
        }
        color="yellow"
      />
    </div>
  );
}
