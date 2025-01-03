// import { AppointmentBooking } from '@/components/appointment-booking'
// import { notFound } from 'next/navigation'

// // This data should ideally come from a database or API
// const lawyers = [
//   { id: 1, name: 'Aminul Islam', basePrice: 5000 },
//   { id: 2, name: 'Farhana Rahman', basePrice: 5500 },
//   { id: 3, name: 'Kamal Hossain', basePrice: 6000 },
//   { id: 4, name: 'Nasreen Akter', basePrice: 5500 },
//   { id: 5, name: 'Rafiqul Islam', basePrice: 5000 },
// ]

// export default async function BookAppointmentPage({ params }: { params: Promise<{ id: string }> }) {
//   const resolvedParams = await params
//   const lawyer = lawyers.find(l => l.id === parseInt(resolvedParams.id))

//   if (!lawyer) {
//     notFound()
//   }

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4">
//       <AppointmentBooking 
//         lawyerId={lawyer.id} 
//         lawyerName={lawyer.name} 
//         basePrice={lawyer.basePrice}
//       />
//     </div>
//   )
// }

