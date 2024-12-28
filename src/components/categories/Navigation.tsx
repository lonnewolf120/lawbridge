import { ArrowLeft, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#795548] text-white">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => window.history.back()}
          className="p-2 hover:bg-[#a1887f] rounded-full transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg"
            alt="LawBridge Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-inter font-semibold">LawBridge</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span className="font-inter">Welcome, Client</span>
        </div>
      </div>
    </nav>
  );
}

