import React from 'react';
import Image from 'next/image';

export default function Loader({text}: {text: string}) {
  return (
    <div className="flex-col m-auto gap-4 w-full flex items-center justify-center">
      <div className="w-16 h-16 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
        <Image 
          src='/logo2.png' 
          alt='logo' 
          width={32} 
          height={32} 
          className='animate-ping'
        />
      </div>
      {text && <p className="text-center mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}