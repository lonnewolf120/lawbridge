import React, { useState } from 'react';
import { useCategorizationContext } from '../contexts/CategorizationContext';

const Step4Location: React.FC = () => {
  const { setLocation, setStep } = useCategorizationContext();
  const [isLocationSpecific, setIsLocationSpecific] = useState<boolean | null>(null);
  const [locationInput, setLocationInput] = useState('');

  const handleNext = () => {
    if (isLocationSpecific === null) {
      alert('Please select whether your issue is location-specific.');
      return;
    }
    if (isLocationSpecific && !locationInput) {
      alert('Please enter your location.');
      return;
    }
    setLocation(isLocationSpecific ? locationInput : 'Not specified');
    setStep(5);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 4: Location-Based Context</h2>
      <p className="mb-4">Is this issue location-specific?</p>
      <div className="space-x-4 mb-4">
        <button
          onClick={() => setIsLocationSpecific(true)}
          className={`px-4 py-2 rounded ${
            isLocationSpecific === true ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => setIsLocationSpecific(false)}
          className={`px-4 py-2 rounded ${
            isLocationSpecific === false ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          No
        </button>
      </div>
      {isLocationSpecific && (
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">
            Please enter your location:
          </label>
          <input
            type="text"
            id="location"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="e.g., Dhaka"
          />
        </div>
      )}
      <button
        onClick={handleNext}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default Step4Location;

