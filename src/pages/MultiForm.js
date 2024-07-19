import React, { useState, useEffect } from 'react';

const MultiForm = () => {
  const [activeForm, setActiveForm] = useState('contact');

  return (
    <div className="flex-1 bg-white shadow-lg rounded-lg p-8 m-4">
      <div className="flex justify-around mb-8">
        <button
          onClick={() => setActiveForm('contact')}
          className={`px-6 py-2 rounded-full text-lg font-semibold ${
            activeForm === 'contact' ? 'bg-green-400 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Contact
        </button>
        <button
          onClick={() => setActiveForm('exco')}
          className={`px-6 py-2 rounded-full text-lg font-semibold ${
            activeForm === 'exco' ? 'bg-green-400 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Exco
        </button>
        <button
          onClick={() => setActiveForm('account')}
          className={`px-6 py-2 rounded-full text-lg font-semibold ${
            activeForm === 'account' ? 'bg-green-400 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Account
        </button>
      </div>
      {activeForm === 'contact' && <ContactForm />}
      {activeForm === 'exco' && <ExcoForm />}
      {activeForm === 'account' && <AccountForm />}
    </div>
  );
};

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('profileData', JSON.stringify(formData));
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-10">
          <div className="text-black text-2xl">Saving ...</div>
        </div>
      )}
    
        
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className={`space-y-6 ${isLoading ? 'opacity-50' : ''}`}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="number" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
        <button onClick={handleSave} className="w-full mt-8 px-4 py-4 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-200" disabled={isLoading}>
          Save
        </button>
        {isSuccess && (
          <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Saved successfully!
          </div>
        )}
      </div>
    </div>
  );
};

const ExcoForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    position: '',
    year: '',
    faculty: '',
    department: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('profileData', JSON.stringify(formData));
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-10">
          <div className="text-black text-2xl">Saving ...</div>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6">Exco Information</h2>
      <div className={`space-y-6 ${isLoading ? 'opacity-50' : ''}`}>
        <select name="school" value={formData.school} onChange={handleChange} className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
          <option value="" disabled>Select School</option>
          <option>Uniben</option>
          <option disabled>Unilag</option>
          <option disabled>UniAbuja</option>
        </select>
        <select name="faculty" value={formData.faculty} onChange={handleChange} className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
          <option value="" disabled>Select Faculty</option>
          <option>Physical Science</option>
          <option disabled>Management Science</option>
          <option disabled>Life Science</option>
        </select>
        <select name="department" value={formData.department} onChange={handleChange} className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
          <option value="" disabled>Select Department</option>
          <option>Chemistry</option>
          <option>Computer Science</option>
          <option>Geology</option>
          <option>Mathematics</option>
          <option>Physics</option>
          <option>Statistics</option>
        </select>
        <select name="position" value={formData.position} onChange={handleChange} className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
          <option value="" disabled>Select Position</option>
          <option>President</option>
          <option>Secretary</option>
          <option>Treasurer</option>
        </select>
        <select name="year" value={formData.year} onChange={handleChange} className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
          <option value="" disabled>Select Year</option>
          <option>2023/2024</option>
          <option>2022/2023</option>
          <option>2021/2022</option>
          <option>2020/2021</option>
          <option>2019/2020</option>
        </select>
        <h3 className="text-xl font-semibold mb-4">Upload an ID</h3>
        <input type="file" className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Verification Document" />
        <button onClick={handleSave} className="w-full mt-8 px-4 py-4 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-200" disabled={isLoading}>
          Save
        </button>
        {isSuccess && (
          <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Saved successfully!
          </div>
        )}
      </div>
      <div>
      <br></br>
      <h3 className="text-xl font-semibold mb-4">Invite Other Exco</h3>
      <p className="text-gray-500 mb-8">COMING SOON</p>
      </div>
    </div>
    
  );
};

const AccountForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('profileData', JSON.stringify(formData));
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-10">
          <div className="text-black text-2xl">Saving ...</div>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6">Account Information</h2>
      <div className={`space-y-6 ${isLoading ? 'opacity-50' : ''}`}>
        <input type="text" name="bank" placeholder="Bank Name" value={formData.bank} onChange={handleChange} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="text" name="account" placeholder="Account Number" value={formData.account} onChange={handleChange} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="text" name="accname" placeholder="Account Name" value={formData.accname} onChange={handleChange} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
        <button onClick={handleSave} className="w-full mt-8 px-4 py-4 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-200" disabled={isLoading}>
          Save
        </button>
        {isSuccess && (
          <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Saved successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiForm;
