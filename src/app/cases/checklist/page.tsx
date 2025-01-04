'use client'
import { useState } from 'react';
import { LawyerSearch } from '@/components/lawyer-search'
import { FindLawyersMap } from '@/components/find-lawyers-map'

export default function FindLawyersPage() {
  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false]);

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const steps = [
    'Create a detailed inventory of assets and debts',
    'Write the first draft of your will',
    'Arrange for witnesses',
    'Sign your will in front of witnesses',
    'Store your will in a safe place',
  ];

  const completedSteps = checkedItems.filter(Boolean).length;
  const progressWidth = (completedSteps / steps.length) * 100;

  return (
    <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif mb-8 text-center">Track Progress</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center space-y-4 w-full">
      <div className="relative flex items-center justify-between w-full mt-4">
             <div className="absolute left-0 right-0 h-2 bg-gray-300 rounded-full"></div>
        <div
              className="absolute left-0 h-2 bg-green-500 rounded-full transition-all duration-300"
               style={{ width: `${progressWidth}%` }}
            ></div>
            {steps.map((step, index) => (
                <div
                 key={index}
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  checkedItems[index] ? 'bg-green-500 border-green-500' : 'bg-gray-200 border-gray-400'
                }`}
              >
           {checkedItems[index] ? (
              <span className="text-white">✓</span>
            ) : (
                    <span className="text-gray-500">{index + 1}</span>
             )}
                           </div>
          ) ) }
            </div>

           < div className="flex flex-col space-y-4 w-full">
             {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
                    className="w-5 h-5 border-2 border-gray-400 rounded"
                />
                <div
                  className={`text-black text-lg font-medium ${
                    checkedItems[index] ? 'line-through' : ''
                  }`}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   
    </div>
  );
}