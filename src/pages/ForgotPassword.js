import React from 'react';
import { Link } from 'react-router-dom';

import ImageMobile from '../assets/img/Ztellalogo.png';
import ImageDesktop from '../assets/img/favicon.png';
import { Label, Input, Button } from '@windmill/react-ui';

function ForgotPassword() {
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
              className="object-cover w-full h-full hidden md:block"
              src={ImageDesktop}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Forgot password
              </h1>

              <Label>
                <span>Email</span>
                <Input className="mt-1" placeholder="Jane Doe" />
              </Label>

              <Button
                tag={Link}
                to="/login"
                block
                className="mt-4"
                style={{
                  backgroundColor: '#41aa5e', // Custom green color
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'} // Darker green on hover
                onMouseLeave={(e) => e.target.style.backgroundColor = '#41aa5e'} // Original green
              >
                Recover password
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
