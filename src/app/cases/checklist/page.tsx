'use client'
import { useState } from 'react';
import { LawyerSearch } from '@/components/lawyer-search'
import { FindLawyersMap } from '@/components/find-lawyers-map'

export default function FindLawyersPage() {
  const [checkedItems, setCheckedItems] = useState([false, false]);

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
      <h1 className="text-3xl font-serif mb-8">Track Progress</h1>
      <div>
        <div className="flex flex-col items-center space-y-4 w-full">
          <div className="relative flex items-center justify-between w-full mt-4">
            <div className="absolute left-0 right-0 h-1 bg-gray-300"></div>
            <div
              className="absolute left-0 h-1 bg-green-500"
              style={{ width: `${progressWidth}%` }}
            ></div>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  checkedItems[index] ? 'bg-green-500 border-green-500' : 'bg-gray-200 border-gray-400'
                }`}
              >
                {checkedItems[index] ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span className="text-gray-500">{index + 1}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-2 w-full">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="w-[20px] h-[20px] border-[2px] border-black"
                />
                <div
                  className={`text-black text-[12px] font-roboto font-normal leading-[19px] ${
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