'use client'

import CaseDetailsPage from "@/components/cases/details"
import { Suspense } from "react"

export default function page(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseDetailsPage/>
    </Suspense>
  )
}