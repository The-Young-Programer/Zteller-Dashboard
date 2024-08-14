import React, { useState } from 'react';
import PageTitle from '../components/Typography/PageTitle';
import SectionTitle from '../components/Typography/SectionTitle';
import { Input, Label, Select, Textarea, Button } from '@windmill/react-ui';
import { MailIcon, CallIcon, WhatsAppIcon, MapIcon, Call2Icon, Mail2Icon } from '../icons';

function Forms() {
  const [formData, setFormData] = useState({
    issue: '',
    email: '',
    phoneNumber: '',
    query: ''
  });
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      issue: '',
      email: '',
      phoneNumber: '',
      query: ''
    });
    setSuccessMessage('Query submitted successfully'); // Set success message
  };

  return (
    <>
      <PageTitle>Contact Us</PageTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <SectionTitle>Reach Us At</SectionTitle>
          <Label className="mt-4" radio>
            <CallIcon className="w-5 h-5" />
            <a href='tel:+2348156622466' className="ml-2">+234-815-6622-466</a>
          </Label>
          <br />
          <Label className="mt-4" radio>
            <MailIcon className="w-5 h-5" />
            <a href={'mailto:info@zteller.com'} className="ml-2">info@zteller.com</a>
          </Label >
          <br />
          <Label className="mt-4" radio>
            <MapIcon className="w-5 h-5"/>
            <span className="ml-2">A-143, Sovereign Corporate<br />Benin City, 300313, Edo State.</span>
          </Label>
          <br /><br /><br />
          <div className="mt-4">
            <SectionTitle>Easy Contact Links</SectionTitle>
            <div className="mt-2">
              <Label className="ml-6" radio>
                <a href="contact">
                  <WhatsAppIcon className="w-6 h-6"/>            
                </a>
              </Label>
              <Label className="ml-6" radio>
                <a href="contact">
                  <Mail2Icon className="w-6 h-6"/>
                </a>
              </Label>
              <Label className="ml-6" radio>
                <a href="contact">
                  <Call2Icon className="w-6 h-6"/>
                </a>
              </Label>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <SectionTitle>Map</SectionTitle>
          <Label className="mt-4">
            <iframe width="100%" height="400" title="map" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=University%20of%20Benin,%20Benin%20City,%20Edo%20State,%20Nigeria%20P.M.B.%201154+(Zteller)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
          </Label>
        </div>
      </div>

      <SectionTitle>Feedback & Queries</SectionTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="issue" className="block text-gray-700 mb-2">Select Issue:</Label>
            <Select name="issue" id="issue" onChange={handleChange} value={formData.issue} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
              <option value="">Select an issue</option>
              <option value="payment">Payment Issue</option>
              <option value="refund">Refund Issue</option>
              <option value="subscription">Subscription Issue</option>
            </Select>
          </div>
          <div className="mb-4">
            <Label className="mb-2">Email:</Label>
            <Input type="email" id="email" name="email" onChange={handleChange} value={formData.email} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
          </div>
          <div className="mb-4">
            <Label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Phone Number:</Label>
            <Input type="tel" id="phoneNumber" name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} placeholder="Enter your phone number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
          </div>
          <div className="mb-4">
            <Label htmlFor="query" className="block text-gray-700 mb-2">Query:</Label>
            <Textarea id="query" name="query" onChange={handleChange} value={formData.query} placeholder="Enter your query" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
          </div>
          <Button 
            style={{ backgroundColor:'#41aa5e' }} 
            type="submit" 
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default Forms;
