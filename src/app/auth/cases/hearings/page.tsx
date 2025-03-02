'use client'
import { useState, useEffect, ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import Link from 'next/link'
import { parseCookies } from 'nookies';
import Loader from '@/components/external/Loader';


interface Hearing {
  details: string;
  hearing_id: number;
  caseTitle: string;
  date: string;
  time: string;
  location: string;
  // details: string;
}

export default function HearingsPage() {
  //const userId = 3;
  const [hearings, setHearings] = useState<Hearing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const cookies = parseCookies()
     


  useEffect(() => { 
    const user = cookies.user ? JSON.parse(cookies.user) : null;
    const userId = user.userId

    async function fetchHearings() {
      try {
        const response = await fetch(`http://localhost:10101/hearings/user/${userId}`, {
          method: 'GET',
          credentials: 'include', 
        });
        const data = await response.json();
        if (response.ok) {
          setHearings(data.hearings);
        } else {
          setError(data.error || 'Failed to fetch hearings');
        }
      } catch (err) {
        console.error('Error fetching hearings:', err);
        setError('An error occurred while fetching hearings.');
      } finally {
        setLoading(false);
      }
    }
    fetchHearings();
  }, [cookies]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 p-8">
        <h1 className="text-3xl font-bold mb-8 text-primary-900">Upcoming Hearings</h1>
        <div><Loader text='Loading hearings...' /></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 p-8">
        <h1 className="text-3xl font-bold mb-8 text-primary-900">Upcoming Hearings</h1>
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-b from-white to-primary-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-primary-900">Upcoming Hearings</h1>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-2">
        {hearings.map((hearing) => (
          <Card key={hearing.hearing_id} className="overflow-hidden border-secondary-200">
            <CardHeader className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
             <CardTitle>{hearing.details}</CardTitle> 
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ">
                <div className="flex items-center">
                  <CalendarDays className="w-3 h-3 text-primary-600" />
                  <span>{hearing.date.split("T")[0]}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 text-primary-600" />
                  <span>
                    {hearing.time.split(":").slice(0, 2).join(":")}{" "}
                    {parseInt(hearing.time.split(":")[0]) >= 12 ? "PM" : "AM"}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 text-primary-600" />
                  <span>{hearing.location}</span>
                </div>
              </div>
              <div className="mt-4">
              <Link href={`/auth/cases/hearings/details`}>
              <Button variant="outline" className="text-primary-700 border-primary-500 hover:bg-primary-50">
                  View Details
                </Button>
              </Link>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
