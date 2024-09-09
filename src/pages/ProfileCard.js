import React, { useState, useEffect } from 'react';
import { FiCamera } from 'react-icons/fi';
import ztellerImage from '../assets/img/zteller.png';
import logo from './Ztellalogo.png'

const ProfileCard = () => {
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('profileImage') || ztellerImage;
  });
  const [profileData, setProfileData] = useState({
    name: 'Nemonet TYP',
    school: 'Uniben',
    position: 'NACOS President',
    faculty: 'Physical Science',
    department: 'Computer Science'
  });

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
    const savedProfileData = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfileData) {
      setProfileData(savedProfileData);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-6 m-4" style={{ maxHeight: '550px' }}>
      <div className="text-center">
        <div className="relative mx-auto w-24 h-24 mb-4">
          <img
          
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
          <label htmlFor="profileImage" className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 bg-black bg-opacity-50 rounded-full cursor-pointer p-1">
            <FiCamera className="text-white" />
          </label>
          <input
            type="file"
            id="profileImage"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <label htmlFor="nemonet-typ" className="w-full md:w-1/4 font-bold text-gray-700">Name:</label>
            <input type="text" id="nemonet-typ" value={profileData.name} className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-200" disabled />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <label htmlFor="school-name" className="w-full md:w-1/4 font-bold text-gray-700">School Name:</label>
            <input type="text" id="school-name" value={profileData.school} className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-200" disabled />
          </div>
         
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <label htmlFor="departmental-president" className="w-full md:w-1/4 font-bold text-gray-700">Position:</label>
            <input type="text" id="departmental-president" value={profileData.position} className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-200" disabled />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <label htmlFor="computer-science" className="w-full md:w-1/4 font-bold text-gray-700">Year:</label>
            <input type="text" id="year" value={profileData.year} className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-200" disabled />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <label htmlFor="physical-science" className="w-full md:w-1/4 font-bold text-gray-700">Faculty:</label>
            <input type="text" id="physical-science" value={profileData.faculty} className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-200" disabled />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <label htmlFor="computer-science" className="w-full md:w-1/4 font-bold text-gray-700">Department:</label>
            <input type="text" id="computer-science" value={profileData.department} className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-200" disabled />
          </div>
        </div>

        <a href="https://zteller.com" className="mt-6 inline-block px-4 py-2 bg-transparent text-green-600 rounded hover:bg-transparent transition duration-200">
         <div style={{
     
    display:'flex',
    
   }}> Powered by <img src={logo} alt='logo'  style={{
     
      width: '60px',
     
    }}/>
    </div>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
