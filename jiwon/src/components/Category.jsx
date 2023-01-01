import React from 'react';
import DeveloperProfile from './DeveloperProfile';
import QAEngineerProfile from './QAEngineerProfile';
import CreatorProfile from './CreatorProfile';
import ExuberantProfile from './ExuberantProfile';

export default function Category() {
  const onClickHandler = (item) => {
    switch (item) {
      case 'developer':
        return <DeveloperProfile />;

      case 'qa':
        return <QAEngineerProfile />;

      case 'creator':
        return <CreatorProfile />;

      case 'exuberant':
        return <ExuberantProfile />;

      default:
        return <DeveloperProfile />;
    }
  };
  return (
    <div className="container1">
      <button className="button" onClick={onClickHandler('developer')}>
        Developer
      </button>
      <button className="button" onClick={onClickHandler}>
        QA Software Engineer
      </button>
      <button className="button" onClick={onClickHandler}>
        Creator
      </button>
      <button className="button" onClick={onClickHandler}>
        Exuberant
      </button>
    </div>
  );
}
