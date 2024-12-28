'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function ProgressPage() {
  const username = "John Doe"; // Example username
  const actualName = "Johnathan Doe"; // Example actual name

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
            <CardTitle>Tile 1</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add tile 1 content here */}
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tile 2</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add tile 2 content here */}
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tile 3</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add tile 3 content here */}
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tile 4</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add tile 4 content here */}
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tile 5</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add tile 5 content here */}
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tile 6</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add tile 6 content here */}
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tile 7</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add tile 7 content here */}
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tile 8</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add tile 8 content here */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}