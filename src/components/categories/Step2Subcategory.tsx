import React from 'react';
import { useCategorizationContext } from '../contexts/CategorizationContext';

const subcategories: Record<string, string[]> = {
  Personal: ['Marriage/Divorce', 'Child Custody/Adoption', 'Name Change', 'Domestic Abuse', 'Other'],
  Business: ['Contract Disputes', 'Intellectual Property', 'Employment Issues', 'Business Formation', 'Other'],
  Property: ['Real Estate', 'Landlord-Tenant', 'Property Disputes', 'Zoning Issues', 'Other'],
  Criminal: ['Theft', 'Assault', 'Drug Offenses', 'Traffic Violations', 'Other'],
  Consumer: ['Product Liability', 'Debt Collection', 'Identity Theft', 'False Advertising', 'Other'],
};

const Step2Subcategory: React.FC = () => {
  const { category, setSubcategory, setStep } = useCategorizationContext();

  const handleSubcategorySelect = (subcategory: string) => {
    setSubcategory(subcategory);
    setStep(3);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 2: Subcategory Exploration</h2>
      <p className="mb-4">Please select the specific nature of your {category.toLowerCase()} issue:</p>
      <div className="space-y-2">
        {subcategories[category].map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => handleSubcategorySelect(subcategory)}
            className="w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded"
          >
            {subcategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step2Subcategory;

