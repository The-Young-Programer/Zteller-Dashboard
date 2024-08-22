import React, { useState } from 'react';

const MultiForm = () => {
  const [activeForm, setActiveForm] = useState('contact');
  const [formErrors, setFormErrors] = useState({
    contact: false,
    exco: false,
    account: false
  });

  const handleSave = () => {
    let errors = { contact: false, exco: false, account: false };

    if (activeForm === 'contact') {
      errors.contact = !validateContactForm();
    } else if (activeForm === 'exco') {
      errors.exco = !validateExcoForm();
    } else if (activeForm === 'account') {
      errors.account = !validateAccountForm();
    }

    setFormErrors(errors);
  };

  const validateContactForm = () => {
    const name = document.querySelector('input[name="name"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="address"]').value;
    return name && number && email && address;
  };

  const validateExcoForm = () => {
    const association = document.querySelector('input[name="association"]').value;
    const school = document.querySelector('select[name="school"]').value;
    const faculty = document.querySelector('select[name="faculty"]').value;
    const department = document.querySelector('select[name="department"]').value;
    const position = document.querySelector('select[name="position"]').value;
    const year = document.querySelector('select[name="year"]').value;
    return association && school && faculty && department && position && year;
  };

  const validateAccountForm = () => {
    const bankName = document.querySelector('input[name="bankName"]').value;
    const accountName = document.querySelector('input[name="accountName"]').value;
    const accountNumber = document.querySelector('input[name="accountNumber"]').value;
    return bankName && accountName && accountNumber;
  };

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
      {activeForm === 'contact' && <ContactForm onSave={handleSave} showError={formErrors.contact} />}
      {activeForm === 'exco' && <ExcoForm onSave={handleSave} showError={formErrors.exco} />}
      {activeForm === 'account' && <AccountForm onSave={handleSave} showError={formErrors.account} />}
    </div>
  );
};

const ContactForm = ({ onSave, showError }) => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(); // Trigger the validation from parent
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3000);
  };

  const validateForm = () => {
    return formData.name && formData.number && formData.email && formData.address;
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
        {showError && (
          <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Please fill in all required fields.
          </div>
        )}
        {isSuccess && (
          <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Saved successfully!
          </div>
        )}
      </div>
    </div>
  );
};

const ExcoForm = ({ onSave, showError }) => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    association: '',
    school: '',
    faculty: '',
    department: '',
    position: '',
    year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(); // Trigger the validation from parent
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem('excoFormData', JSON.stringify(formData));
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3000);
  };

  const validateForm = () => {
    return formData.association && formData.school && formData.faculty &&
           formData.department && formData.position && formData.year;
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
        <input 
          type="text" 
          name="association" 
          placeholder="Association" 
          value={formData.association} 
          onChange={handleChange} 
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select 
          name="school" 
          value={formData.school} 
          onChange={handleChange} 
          className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="" disabled>Select School</option>
          <option>Uniben</option>
          <option>Unilag</option>
          <option>Unilorin</option>
        </select>
        <select 
          name="faculty" 
          value={formData.faculty} 
          onChange={handleChange} 
          className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="" disabled>Select Faculty</option>
          <option>Science</option>
          <option>Arts</option>
          <option>Engineering</option>
        </select>
        <select 
          name="department" 
          value={formData.department} 
          onChange={handleChange} 
          className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="" disabled>Select Department</option>
          <option>Computer Science</option>
          <option>Mathematics</option>
          <option>Physics</option>
        </select>
        <select 
          name="position" 
          value={formData.position} 
          onChange={handleChange} 
          className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="" disabled>Select Position</option>
          <option>President</option>
          <option>Secretary</option>
          <option>Treasurer</option>
        </select>
        <select 
          name="year" 
          value={formData.year} 
          onChange={handleChange} 
          className="w-full p-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="" disabled>Select Year</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
        <button onClick={handleSave} className="w-full mt-8 px-4 py-4 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-200" disabled={isLoading}>
          Save
        </button>
        {showError && (
          <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Please fill in all required fields.
          </div>
        )}
        {isSuccess && (
          <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Saved successfully!
          </div>
        )}
      </div>
    </div>
  );
};

const AccountForm = ({ onSave, showError }) => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    bankName: '',
    accountName: '',
    accountNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(); // Trigger the validation from parent
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem('accountFormData', JSON.stringify(formData));
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3000);
  };

  const validateForm = () => {
    return formData.bankName && formData.accountName && formData.accountNumber;
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
        <input
          type="text"
          name="bankName"
          placeholder="Bank Name"
          value={formData.bankName}
          onChange={handleChange}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="accountName"
          placeholder="Account Name"
          value={formData.accountName}
          onChange={handleChange}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          value={formData.accountNumber}
          onChange={handleChange}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button onClick={handleSave} className="w-full mt-8 px-4 py-4 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-200" disabled={isLoading}>
          Save
        </button>
        {showError && (
          <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Please fill in all required fields.
          </div>
        )}
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
