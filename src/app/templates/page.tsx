import { Search } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'


export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="container py-12 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Free Legal Documents, Forms and Contracts</h1>
          <p className="text-slate-600">
            Print or download your customized legal document with a free trial subscription.
          </p>
          
          {/* Document Links */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
            {[
              { name: "Rental Agreement Form", link: "/templates/residential-lease-agreement" },
              { name: "Incorporation", link: "/templates/incorporation" },
              { name: "Last Will and Testament", link: "/templates/last-will-and-testament" },
              { name: "Separation Agreement", link: "/templates/separation-agreement" },
              { name: "Bill of Sale", link: "/templates/bill-of-sale" },
              { name: "Employment Contract", link: "/templates/employment-contract" },
            ].map((doc) => (
              <Link key={doc.name} href={doc.link}> 
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  {doc.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex flex-col items-center gap-4 relative max-w-2xl mx-auto mt-8">
            <Input
              type="search"
              placeholder="Search hundreds of documents..."
              className="w-full pl-4 pr-10 py-3 rounded-full"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            
        <Link href="/templates/1">
            <Button variant="outline" className="flex flex-col justify-center bg-amber-200 hover:bg-amber-400 text-black text-base">
              View All Documents
            </Button>
            </Link>  
          </div>
        </section>

        {/* Accomplishment Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">What do you want to accomplish?</h2>
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Rent Out Property", icon: "🏠" },
              { title: "Plan My Estate", icon: "📋" },
              { title: "Start a Business", icon: "🏪" },
              { title: "Sell Services", icon: "💼" },
              { title: "Sell or Transfer Real Estate", icon: "🔄" },
              { title: "Lend Money", icon: "💰" },
              { title: "Buy, Sell, or Rent Goods", icon: "🛍️" },
              { title: "Manage Employees", icon: "👥" },
              { title: "Separate or Divorce", icon: "📄" },
              { title: "Plan My Child's Care", icon: "👶" },
            ].map((item) => (
              <Link
                key={item.title}
                href="#"
                className="flex items-center gap-4 text-green-600 hover:text-green-700 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            ))}

          </div>
        </section>  
      </main>
    </div>
  )
}
