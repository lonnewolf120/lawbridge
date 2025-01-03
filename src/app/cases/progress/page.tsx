'use client'
import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProgressBar } from '@/components/progress-bar-round'

export default function ProgressPage() {
  const username = "John Doe"; 
  const actualName = "Johnathan Doe"; 

  return (
    <div className="bg-gray-100 text-gray-800 font-sans p-4">
      <div className="grid grid-cols-4 gap-4">
        <Card className="col-span-1 row-span-10 h-100">
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center">
              <div className="text-center p-5">
                <img src="/profile-pic.png" className="w-24 h-24 rounded-full" alt="Profile" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-2 text-black text-2xl">
              <p>Sadman1611</p>
              <p className="text-base text-black-200">Sadman Shafiq</p>
              <p className="text-base text-black-200">_________ </p>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Bail Hearings</CardTitle>
            <Link href="/cases/checklist">

<p className="text-blue-600 text-sm font-semibold hover:underline">Details</p>
</Link>
          </CardHeader>
          <CardContent>
          <ProgressBar progress={12} />

          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Probation Hearings</CardTitle>
            <Link href="/cases/checklist">

<p className="text-blue-600 text-sm font-semibold hover:underline">Details</p>
</Link>
          </CardHeader>
          <CardContent>
            <ProgressBar progress={30}/>

          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Class Action</CardTitle>
            <Link href="/cases/checklist">

<p className="text-blue-600 text-sm font-semibold hover:underline">Details</p>
</Link>

          </CardHeader>
          <CardContent>
            <ProgressBar progress={40} />

          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Property</CardTitle>
            <Link href="/cases/checklist">

            <p className="text-blue-600 text-sm font-semibold hover:underline">Details</p>
            </Link>
          </CardHeader>
          <CardContent>
          <ProgressBar progress={90} />

          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Lawsuit</CardTitle>
            <Link href="/cases/checklist">

<p className="text-blue-600 text-sm font-semibold hover:underline">Details</p>
</Link>
          </CardHeader>
          <CardContent>
          <ProgressBar progress={54} />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Divorce</CardTitle>
            <Link href="/cases/checklist">

<p className="text-blue-600 text-sm font-semibold hover:underline">Details</p>
</Link>

          </CardHeader>
          <CardContent>
           <ProgressBar progress={33} />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
