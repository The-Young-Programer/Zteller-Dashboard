// src/pages/Profile.js
import React from 'react';
import ProfileCard from '../pages/ProfileCard';
import MultiForm from '../pages/MultiForm';
import PageTitle from '../components/Typography/PageTitle';

function Profile() {
  return (
   
    <><PageTitle>Profile</PageTitle>
    <div className="App flex flex-col md:flex-row">
      <ProfileCard />
      <MultiForm />
    </div></>
  );
}

export default Profile;




