import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { Button } from "@/components/ui/button"

const cardsData = [
  {
    title: 'Marriage Laws and Procedures in Bangladesh',
    content: 'Overview of marriage registration and legal requirements.',
  },
  {
    title: 'Divorce Laws: Rights and Processes',
    content: 'Step-by-step guide on filing for divorce and understanding legal rights.',
  },
  {
    title: 'Understanding Inheritance Laws',
    content: 'Explanation of inheritance rules under Islamic and Hindu laws.',
  },
  {
    title: 'Child Custody and Guardianship',
    content: 'Legal processes and rights related to child custody cases.',
  },
  {
    title: 'Domestic Violence Laws and Remedies',
    content: 'Support systems and legal steps to address domestic violence.',
  },
];

const Personal: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>    
      <h4 className='text-4xl text-black mb-4 mt-4'>Business Law</h4>
    <div className='grid grid-row-4 md:grid-row-4 lg:grid-row-6 gap-6'>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {cardsData.map((topic, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '200px' }}>
            <img src='/lawyer.jpg' alt='Lawyer' style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h2 className='text-xl text-pretty text-'>{index + 1}. {topic.title}</h2>
            <p>{topic.content}</p>
            <Button className='bg-primary-100 hover:bg-primary-400 text-black text-base'> Enroll now</Button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Personal;
