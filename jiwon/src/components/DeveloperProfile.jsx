import React from 'react';
import Profile from './Profile';
import MonthlyPlans from './MonthlyPlans';

export default function DeveloperProfile(props) {
  return (
    <div className="container2">
      <Profile
        month="JANUARY"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description={<MonthlyPlans />}
      />
      <Profile
        month="FEBRUARY"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="MARCH"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="APRIL"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="MAY"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="JUNE"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="JULY"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="AUGUST"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />{' '}
      <Profile
        month="SEPTEMBER"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="OCTOBER"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="NOVEMBER"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
      <Profile
        month="DECEMBER"
        priority=""
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description=""
      />
    </div>
  );
}
