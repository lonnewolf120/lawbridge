// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface CategorizationContextType = {
//   step: number;
//   setStep: (step: number) => void;
//   category: string;
//   setCategory: (category: string) => void;
//   subcategory: string;
//   setSubcategory: (subcategory: string) => void;
//   assistanceTypes: string[];
//   setAssistanceTypes: (types: string[]) => void;
//   location: string;
//   setLocation: (location: string) => void;
// };

// const defaultCategorizationContext: CategorizationContextType = {
//   step: 1,
//   setStep: () => {},
//   category: '',
//   setCategory: () => {},
//   subcategory: '',
//   setSubcategory: () => {},
//   assistanceTypes: [],
//   setAssistanceTypes: () => {},
//   location: '',
//   setLocation: () => {},
// };

// const CategorizationContext = createContext<CategorizationContextType>(defaultCategorizationContext);

// export const useCategorizationContext = () => {
//   const context = useContext(CategorizationContext);
//   return context;
// };

// export const CategorizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [step, setStep] = useState(1);
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   const [assistanceTypes, setAssistanceTypes] = useState<string[]>([]);
//   const [location, setLocation] = useState('');

//   return (
//     <CategorizationContext.Provider
//       value={{
//         step,
//         setStep,
//         category,
//         setCategory,
//         subcategory,
//         setSubcategory,
//         assistanceTypes,
//         setAssistanceTypes,
//         location,
//         setLocation,
//       }}
//     >
//       {children}
//     </CategorizationContext.Provider>
//   );
// };