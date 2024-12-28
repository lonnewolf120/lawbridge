import { Home, Book, Mail, Settings, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function Taskbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#64748b] text-white px-4 py-2">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex flex-col items-center p-2 hover:bg-[#795548] rounded transition-colors">
          <Home className="h-5 w-5" />
          <span className="text-xs font-inter">Home</span>
        </Link>
        <Link href="/resources" className="flex flex-col items-center p-2 hover:bg-[#795548] rounded transition-colors">
          <Book className="h-5 w-5" />
          <span className="text-xs font-inter">Resources</span>
        </Link>
        <Link href="/messages" className="flex flex-col items-center p-2 hover:bg-[#795548] rounded transition-colors">
          <Mail className="h-5 w-5" />
          <span className="text-xs font-inter">Messages</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center p-2 hover:bg-[#795548] rounded transition-colors">
          <Settings className="h-5 w-5" />
          <span className="text-xs font-inter">Settings</span>
        </Link>
        <Link href="/help" className="flex flex-col items-center p-2 hover:bg-[#795548] rounded transition-colors">
          <HelpCircle className="h-5 w-5" />
          <span className="text-xs font-inter">Help</span>
        </Link>
      </div>
    </div>
  );
}

