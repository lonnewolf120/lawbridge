import React from 'react';
import { useCategorizationContext } from '../contexts/CategorizationContext';

const assistanceTypes = [
  'Drafting legal documents',
  'Filing a complaint or case',
  'Understanding legal rights',
  'Connecting with a lawyer',
];

const Step3AssistanceType: React.FC = () => {
  const { assistanceTypes: selectedTypes, setAssistanceTypes, setStep } = useCategorizationContext();

  const handleTypeToggle = (type: string) => {
    setAssistanceTypes(
      selectedTypes.includes(type)
        ? selectedTypes.filter((t) => t !== type)
        : [...selectedTypes, type]
    );
  };

  const handleNext = () => {
    if (selectedTypes.length > 0) {
      setStep(4);
    } else {
      alert('Please select at least one type of assistance.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 3: Assistance Identification</h2>
      <p className="mb-4">What type of help do you need? (Select all that apply)</p>
      <div className="space-y-2">
        {assistanceTypes.map((type) => (
          <label key={type} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeToggle(type)}
              className="form-checkbox"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default Step3AssistanceType;

