import React from 'react';
import { CategorizationProvider, useCategorizationContext } from '../contexts/CategorizationContext';
import Navigation from './Navigation';
import Taskbar from './Taskbar';
import Step1GeneralIssue from './Step1GeneralIssue';
import Step2Subcategory from './Step2Subcategory';
import Step3AssistanceType from './Step3AssistanceType';
import Step4Location from './Step4Location';
import Step5Summary from './Step5Summary';

const LegalIssueCategorization: React.FC = () => {
  return (
    <CategorizationProvider>
      <div className="min-h-screen bg-[#f5f5f5] font-inter">
        <Navigation />
        <div className="max-w-2xl mx-auto p-4 pb-20">
          <h1 className="text-2xl font-bold mb-4 text-[#000000]">Let's help you find the right legal assistance!</h1>
          <p className="mb-6 text-[#64748b]">Answer a few questions, and we'll guide you to the best resources tailored to your legal needs.</p>
          <CategoryFlow />
        </div>
        <Taskbar />
      </div>
    </CategorizationProvider>
  );
};

const CategoryFlow: React.FC = () => {
  const { step } = useCategorizationContext();

  switch (step) {
    case 1:
      return <Step1GeneralIssue />;
    case 2:
      return <Step2Subcategory />;
    case 3:
      return <Step3AssistanceType />;
    case 4:
      return <Step4Location />;
    case 5:
      return <Step5Summary />;
    default:
      return null;
  }
};

export default LegalIssueCategorization;

