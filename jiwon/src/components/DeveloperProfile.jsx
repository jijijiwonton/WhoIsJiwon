import React from 'react';
import Profile from './Profile';
import MonthlyPlans from './MonthlyPlans';

export default function DeveloperProfile(props) {
  return (
    <div className="container2">
      <Profile
        month="January"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description={
          <MonthlyPlans first="Study React js fundamental concepts" />
        }
      />
      <Profile
        month="February"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="March"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="April"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="May"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="June"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="July"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="August"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />{' '}
      <Profile
        month="September"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="October"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="November"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="December"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
    </div>
  );
}
