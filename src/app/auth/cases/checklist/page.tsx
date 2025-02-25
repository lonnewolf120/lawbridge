'use client'
import { Suspense } from 'react';
import Checklist from '@/components/cases/checklist';

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checklist />
    </Suspense>
  )
}
