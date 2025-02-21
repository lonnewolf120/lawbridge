import React from 'react';
import { Button } from "@/components/ui/button"


const BusinessLawCards = () => {
  const topics = [
    {
      title: "Basics of Contract Drafting and Negotiation",
      description: "Learn to create valid and enforceable business contracts."
    },
    {
      title: "Corporate Compliance Essentials",
      description: "Legal responsibilities for startups and small businesses."
    },
    {
      title: "Intellectual Property Basics",
      description: "Protecting trademarks, copyrights, and patents in Bangladesh."
    },
    {
      title: "Employment Law and Workplace Rights",
      description: "Understanding employee rights and employer obligations."
    },
    {
      title: "Taxation Laws for Businesses",
      description: "Tax compliance and filing requirements for businesses."
    }
  ];

  return (
    <div className='flex flex-col items-center'>    
      <h4 className='text-4xl text-black mb-4 mt-4'>Business Law</h4>
    <div className='grid grid-row-4 md:grid-row-4 lg:grid-row-6 gap-6'>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {topics.map((topic, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '200px' }}>
            <h2 className='text-xl text-pretty text-'>{index + 1}. {topic.title}</h2>
            <p>{topic.description}</p>
            
            <Button className='bg-primary-100 hover:bg-primary-400 text-black text-base'> Enroll now</Button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BusinessLawCards;
