import { FindLawyersMap } from '@/components/find-lawyers-map'
import { LawyerSearch } from '@/components/lawyer-search'
import dynamic from 'next/dynamic'

const DynamicFindLawyersMap = dynamic(() => import('@/components/find-lawyers-map').then(mod => mod.FindLawyersMap), {
  ssr: false
})

export default function FindLawyersPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif mb-8">Find Lawyers</h1>
      <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
        <DynamicFindLawyersMap />
        <LawyerSearch />
      </div>
    </div>
  )
}

