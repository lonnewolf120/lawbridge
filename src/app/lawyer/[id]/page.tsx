import  NotFound  from '@/components/external/NotFound';
import { LawyerProfile } from '@/components/lawyer-profile'
// import { notFound } from 'next/navigation'
  export default async function LawyerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    // Await the params
    const resolvedParams = await params
    const baseUrl = process.env.BASE_URL || 'http://localhost:10101'
    let lawyer;
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
  
    return <div> {lawyer? <LawyerProfile lawyer={lawyer} />: <NotFound />} </div>
  }
  
