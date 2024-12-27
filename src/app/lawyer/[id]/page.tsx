import { LawyerProfile } from '@/components/lawyer-profile'
import { notFound } from 'next/navigation'

// TODO: Fetch this data from database
const lawyers = [
  { id: 1, name: 'Aminul Islam', image: 'https://avatar.iran.liara.run/public/boy', practiceAreas: ['Criminal Law', 'Civil Law'], rating: 4.5, location: 'Dhaka', bio: 'Aminul Islam is a seasoned lawyer with over 15 years of experience in Criminal and Civil Law. He has successfully handled numerous high-profile cases and is known for his strategic approach to legal challenges.', education: 'LLB, University of Dhaka', contact: { email: 'aminul.islam@lawbridge.com', phone: '+880 1700 000001' } },
  { id: 2, name: 'Farhana Rahman', image: 'https://avatar.iran.liara.run/public/girl', practiceAreas: ['Family Law', 'Immigration Law'], rating: 4.8, location: 'Chittagong', bio: 'Farhana Rahman specializes in Family and Immigration Law. With her compassionate approach and extensive knowledge, she has helped countless families navigate complex legal situations.', education: 'LLM, University of Chittagong', contact: { email: 'farhana.rahman@lawbridge.com', phone: '+880 1700 000002' } },
  { id: 3, name: 'Kamal Hossain', image: 'https://avatar.iran.liara.run/public/boy', practiceAreas: ['Corporate Law', 'Tax Law'], rating: 4.2, location: 'Dhaka', bio: 'Kamal Hossain is a corporate law expert with a strong background in tax law. He advises major corporations and has played a key role in several landmark business cases in Bangladesh.', education: 'LLB, London School of Economics', contact: { email: 'kamal.hossain@lawbridge.com', phone: '+880 1700 000003' } },
  { id: 4, name: 'Nasreen Akter', image: 'https://avatar.iran.liara.run/public/girl', practiceAreas: ['Intellectual Property', 'Corporate Law'], rating: 4.6, location: 'Sylhet', bio: 'Nasreen Akter is at the forefront of Intellectual Property law in Bangladesh. Her expertise in both IP and Corporate Law makes her a valuable asset for businesses protecting their innovations.', education: 'LLM, Harvard Law School', contact: { email: 'nasreen.akter@lawbridge.com', phone: '+880 1700 000004' } },
  { id: 5, name: 'Rafiqul Islam', image: 'https://avatar.iran.liara.run/public/boy', practiceAreas: ['Real Estate Law', 'Civil Law'], rating: 4.3, location: 'Khulna', bio: 'Rafiqul Islam has extensive experience in Real Estate and Civil Law. He has successfully resolved numerous property disputes and is known for his thorough approach to complex civil cases.', education: 'LLB, University of Rajshahi', contact: { email: 'rafiqul.islam@lawbridge.com', phone: '+880 1700 000005' } },
]

export default function LawyerProfilePage({ params }: { params: { id: string } }) {
  const lawyer = lawyers.find(l => l.id === parseInt(params.id))

  if (!lawyer) {
    notFound()
  }

  return <LawyerProfile lawyer={lawyer} />
}

