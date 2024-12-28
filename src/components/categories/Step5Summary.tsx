import React from 'react';
import { useCategorizationContext } from '../contexts/CategorizationContext';
import { FileText, Phone, Book } from 'lucide-react';
import Image from 'next/image';

const Step5Summary: React.FC = () => {
  const { category, subcategory, assistanceTypes, location } = useCategorizationContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4 text-[#000000]">Summary and Recommendations</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <p className="text-[#64748b]"><strong>Issue Category:</strong> {category} - {subcategory}</p>
        <p className="text-[#64748b]"><strong>Assistance Needed:</strong> {assistanceTypes.join(', ')}</p>
        <p className="text-[#64748b]"><strong>Location:</strong> {location}</p>
      </div>
      
      <h3 className="text-lg font-semibold mb-4 text-[#000000]">Recommended Actions:</h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        <a href="#" className="group block">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg"
                alt="Legal Templates"
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#795548] text-white">
              <FileText className="h-6 w-6 mb-2" />
              <h4 className="font-semibold mb-1">Download Templates</h4>
              <p className="text-sm opacity-90">Access legal document templates relevant to your case</p>
            </div>
          </div>
        </a>

        <a href="#" className="group block">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg"
                alt="Legal Consultation"
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#795548] text-white">
              <Phone className="h-6 w-6 mb-2" />
              <h4 className="font-semibold mb-1">Book Consultation</h4>
              <p className="text-sm opacity-90">Schedule a meeting with a qualified lawyer</p>
            </div>
          </div>
        </a>

        <a href="#" className="group block">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg"
                alt="Legal Rights"
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#795548] text-white">
              <Book className="h-6 w-6 mb-2" />
              <h4 className="font-semibold mb-1">Learn Your Rights</h4>
              <p className="text-sm opacity-90">Understand your legal rights and options</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Step5Summary;

