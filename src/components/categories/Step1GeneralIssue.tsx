import React from 'react';
import { useCategorizationContext } from '../contexts/CategorizationContext';

const categories = ['Personal', 'Business', 'Property', 'Criminal', 'Consumer'];

const Step1GeneralIssue: React.FC = () => {
  const { setCategory, setStep } = useCategorizationContext();

  const handleCategorySelect = (category: string) => {
    setCategory(category);
    setStep(2);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 1: General Issue Identification</h2>
      <p className="mb-4">Please select the broad category of your legal issue:</p>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className="w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step1GeneralIssue;

