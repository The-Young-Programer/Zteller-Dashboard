import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ImageMobile from '../assets/img/Ztellalogo.png';
import ImageDesktop from '../assets/img/favicon.png';
import { GoogleIcon, FacebookIcon } from '../icons';
import { Label, Input, Button } from '@windmill/react-ui';

function Login() {
  const [isHoveredForgotPassword, setIsHoveredForgotPassword] = useState(false);
  const [isHoveredCreateAccount, setIsHoveredCreateAccount] = useState(false);

  const handleMouseEnterForgotPassword = () => {
    setIsHoveredForgotPassword(true);
  };

  const handleMouseLeaveForgotPassword = () => {
    setIsHoveredForgotPassword(false);
  };

  const handleMouseEnterCreateAccount = () => {
    setIsHoveredCreateAccount(true);
  };

  const handleMouseLeaveCreateAccount = () => {
    setIsHoveredCreateAccount(false);
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
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" type="password" placeholder="***************" />
              </Label>

              <Button
                className="mt-4"
                style={{
                  backgroundColor: '#41aa5e', // Custom green color
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'} // Darker green on hover
                onMouseLeave={(e) => e.target.style.backgroundColor = '#41aa5e'} // Original green
                block
                tag={Link}
                to="/app"
              >
                Log in
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <GoogleIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Google
              </Button>
              <Button className="mt-4" block layout="outline">
                <FacebookIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Facebook
              </Button>

              <p className="mt-4">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium hover:underline"
                  style={{
                    color: isHoveredForgotPassword ? '#16a34a' : '#16a34a', // Custom green color
                    textDecoration: isHoveredForgotPassword ? 'underline' : 'none',
                  }}
                  onMouseEnter={handleMouseEnterForgotPassword}
                  onMouseLeave={handleMouseLeaveForgotPassword}
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  to="/create-account"
                  className="text-sm font-medium hover:underline"
                  style={{
                    color: isHoveredCreateAccount ? '#16a34a' : '#16a34a', // Custom green color
                    textDecoration: isHoveredCreateAccount ? 'underline' : 'none',
                  }}
                  onMouseEnter={handleMouseEnterCreateAccount}
                  onMouseLeave={handleMouseLeaveCreateAccount}
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
