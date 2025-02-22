'use client'
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TerminalLoader from '@/components/external/TerminalLoader';

interface Task {
  task_id: number;
  case_id: number;
  title: string;
  description?: string;
  due_date?: string;
  status: string;
}

async function fetchTasksData(caseId: string | null) {
  try {
    const response = await fetch(`http://localhost:10101/tasks/${caseId}`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    if (response.ok) {
      return data.tasks;
    } else {
      throw new Error(data.error || 'Failed to fetch tasks');
    }
  } catch (err) {
    throw new Error('An error occurred while fetching tasks.');
  }
}

function TaskList() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get('caseId');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTasks() {
      try {
        const tasksData = await fetchTasksData(caseId);
        setTasks(tasksData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || 'Failed to load tasks');
        setLoading(false);
      }
    }

    loadTasks();
  }, [caseId]);

  const handleCheckboxChange = async (task: Task) => {
    const endpoint = task.status === 'Completed' ? 'incomplete' : 'complete';
    try {
      const taskid = task.task_id;
      const response = await fetch(`http://localhost:10101/tasks/${taskid}/${endpoint}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (response.ok) {
        setTasks((prevTasks) =>
          prevTasks.map((t) =>
            t.task_id === task.task_id ? { ...t, status: endpoint === 'complete' ? 'Completed' : 'Pending' } : t
          )
        );
      } else {
        console.error(`Failed to mark task as ${endpoint}`, data.error);
      }
    } catch (err) {
      console.error(`Error marking task ${endpoint}`, err);
    }
  };

  const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
  const progressWidth = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  if (loading) return <div><TerminalLoader text='Loading tasks...' /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <div className="relative flex items-center justify-between w-full mt-4">
        <div className="absolute left-0 right-0 h-2 bg-gray-300 rounded-full"></div>
        <div
          className="absolute left-0 h-2 bg-primary-500 rounded-full transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        ></div>
        {Array.from({ length: tasks.length }).map((_, index) => (
          <div
            key={index}
            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              index < completedTasks ? 'bg-primary-500 border-primary-500' : 'bg-gray-200 border-gray-400'
            }`}
          >
            {index < completedTasks ? (
              <span className="text-white">✓</span>
            ) : (
              <span className="text-gray-500">{index + 1}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-4 w-full">
        {tasks.map((task, index) => (
          <div
            key={task.task_id}
            className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <input
              type="checkbox"
              checked={task.status === 'Completed'}
              onChange={() => handleCheckboxChange(task)}
              className="w-5 h-5 border-2 border-border-400 rounded"
            />
            <div
              className={`text-black text-lg font-medium
              `}
            >
              {task.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Checklist() {
  return (
    <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-border-800 text-center">Track Progress</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Suspense fallback={<div><TerminalLoader text='Loading tasks...' /></div>}>
          <TaskList />
        </Suspense>
      </div>
    </div>
  );
}