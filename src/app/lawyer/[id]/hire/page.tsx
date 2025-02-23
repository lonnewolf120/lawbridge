'use client'
import  NotFound  from '@/components/external/NotFound';
import LawyerHire from '@/components/lawyer-hire';
import { useRouter } from 'next/navigation';
// import { LawyerProfile } from '@/components/lawyer-profile'
import { parseCookies } from 'nookies';


// import { notFound } from 'next/navigation'
  export default async function LawyerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    // Await the params
    const cookies = parseCookies()
    const router = useRouter()
    const user = cookies.user ? JSON.parse(cookies.user) : null;
    if (!user) {
      router.push('/auth/login')
    }
    const resolvedParams = await params
    const baseUrl = process.env.BASE_URL || 'http://localhost:10101'
    let lawyer;
    console.log("Resolved Params: ", resolvedParams)
    async function fetchLawyer() {
        const res = await fetch(`${baseUrl}/lawyers/${resolvedParams.id}`, 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
        )
        
        console.log("Lawyer info: ", res)
        if (res.ok) {
          lawyer = await res.json()
        }
      }

    await fetchLawyer();


    // if (!lawyer) {
    //   notFound()
    // }
  
    return <div> {lawyer? <LawyerHire lawyer={lawyer} />: <NotFound />} </div>
  }
  
