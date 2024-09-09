import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; 

import ImageMobile from '../assets/img/Ztellalogo.png';
import ImageDesktop from '../assets/img/favicon.png';
import { GoogleIcon, FacebookIcon } from '../icons';
import { Input, Label, Button } from '@windmill/react-ui';

function CreateAccount() {
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleMouseEnterLogin = () => {
    setIsHoveredLogin(true);
  };

  const handleMouseLeaveLogin = () => {
    setIsHoveredLogin(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCreateAccount = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else if (!isChecked) {
      setError('You must agree to the privacy policy.');
    } else {
      // Clear error and proceed with account creation
      setError('');
      // Add your account creation logic here, e.g., an API call to create a new account

      // On successful account creation, redirect to the /login page
      history.push('/login');
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full md:hidden"
              src={ImageMobile}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full md:block"
              src={ImageDesktop}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              {error && <p className="mb-4 text-red-500">{error}</p>}
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="nemo@zteller.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  placeholder="***************"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input
                  className="mt-1"
                  placeholder="***************"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Label>

              <Label className="mt-6 relative" check>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-green-400"
                  style={{
                    appearance: 'none',
                    border: '2px solid #CBD5E0',
                    borderRadius: '3px',
                    width: '1.25rem',
                    height: '1.25rem',
                    backgroundColor: isChecked ? '#16a34a' : 'white',
                    backgroundImage: isChecked ? 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%23fff%27%3E%3Cpath d=%27M9 11l3 3 5-5%27/%3E%3C/svg%3E")' : 'none',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '75%',
                  }}
                />
                <span className="ml-2" style={{ color: isChecked ? '#16a34a' : 'inherit' }}>
                  I agree to the <span className="underline" tag={Link} to="#">privacy policy</span>
                </span>
              </Label>

              <Button
                className="mt-4"
                style={{
                  backgroundColor: '#41aa5e', // Custom green color
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'} // Darker green on hover
                onMouseLeave={(e) => e.target.style.backgroundColor = '#41aa5e'} // Original green
                onClick={handleCreateAccount}
                block
              >
                Create account
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <GoogleIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Google
              </Button>
              <Button block className="mt-4" layout="outline">
                <FacebookIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Facebook
              </Button>
              
              <p className="mt-4">
                <Link
                  to="/login"
                  className="text-sm font-medium hover:underline"
                  style={{
                    color: isHoveredLogin ? '#16a34a' : '#16a34a', // Custom green color
                    textDecoration: isHoveredLogin ? 'underline' : 'none',
                  }}
                  onMouseEnter={handleMouseEnterLogin}
                  onMouseLeave={handleMouseLeaveLogin}
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
