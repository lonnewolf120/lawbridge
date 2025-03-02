'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ProgressBar } from '@/components/progress-bar-round'
import { parseCookies } from 'nookies'
import Loader from '@/components/external/Loader'

interface CaseItem {
  case_id: number;
  title: string;
}

export default function ProgressPage() {
  const clientId = 3; 
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [progresses, setProgresses] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cookies = parseCookies()
    
    useEffect(() => {
      const user = cookies.user ? JSON.parse(cookies.user) : null;
      const userId = user.userId

        const fetchCases = async () => {
          try {
            console.log("Userid", userId, "cookies: ", cookies)
            const res = await fetch(`http://localhost:10101/cases/client/${userId}`, {
              method: 'GET',
              credentials: 'include',
            });
            const data = await res.json();
            setCases(data.cases);
          } catch (err: any) {
            console.error("Error fetching cases:", err);
            // setError((err as Error).message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchCases();
      }, [cookies]);



  useEffect(() => {
    if (cases.length > 0) {
      const fetchTasksForCases = async () => {
        const newProgresses: { [key: number]: number } = {};
        await Promise.all(
          cases.map(async (caseItem) => {
            try {
              const res = await fetch(`http://localhost:10101/tasks/${caseItem.case_id}`);
              if (!res.ok) {
                throw new Error(`Error fetching tasks for case ${caseItem.case_id}`);
              }
              const data = await res.json();
              const tasks = data.tasks;
              const totalTasks = tasks.length;
                const completedTasks: number = tasks.filter((task: { status: string }) => task.status === 'Completed').length;
              newProgresses[caseItem.case_id] = totalTasks > 0 
                ? Math.round((completedTasks / totalTasks) * 100)
                : 0;
            } catch (err) {
              console.error(err);
              newProgresses[caseItem.case_id] = 0;
            }
          })
        );
        setProgresses(newProgresses);
      };

      fetchTasksForCases();
    }
  }, [cases]);



  if (loading) return <div className="p-4"><Loader text='Loading...' /></div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="mt-10 bg-gray-100 text-border-800 font-sans p-4">
      <div className="grid grid-cols-4 gap-4">
        {cases.map((caseItem) => (
          <Card key={caseItem.case_id} className="col-span-1">
            <CardHeader>
              <CardTitle>{caseItem.title}</CardTitle>
              <Link href={`/auth/cases/checklist?caseId=${caseItem.case_id}`}>
                <p className="text-blue-600 text-sm font-semibold hover:underline">
                  Details
                </p>
              </Link>
            </CardHeader>
            <CardContent>
              <ProgressBar progress= {progresses[caseItem.case_id] ?? 0} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
