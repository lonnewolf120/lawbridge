'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
interface Task {
  task_id: number;
  case_id: number;
  title: string;
  description?: string;
  due_date?: string;
  status: string;
}

export default function Checklist() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get('caseId'); 
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch(`http://localhost:10101/tasks/${caseId}`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        if (response.ok) {
          setTasks(data.tasks);
        } else {
          setError(data.error || 'Failed to fetch tasks');
        }
      } catch (err) {
        setError('An error occurred while fetching tasks.');
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, [caseId]);

  const handleCheckboxChange = async (task: Task) => {
    if (task.status === 'Completed') 
    {
      try {
        const taskid = task.task_id;
        const response = await fetch(`http://localhost:10101/tasks/${taskid}/incomplete`, {
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
              t.task_id === task.task_id ? { ...t, status: 'Pending' } : t
            )
          );
        } else {
          console.error('Failed to mark task as incomplete', data.error);
        }
      } catch (err) {
        console.error('Error marking task incomplete', err);
      }
    }

    else 
    {
      try {
        const taskid = task.task_id;
        console.log(taskid);
        const response = await fetch(`http://localhost:10101/tasks/${taskid}/complete`, {
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
              t.task_id === task.task_id ? { ...t, status: 'Completed' } : t
            )
          );
        } else {
          console.error('Failed to mark task as complete', data.error);
        }
      } catch (err) {
        console.error('Error marking task complete', err);
      }

    }

    
  };

  const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
  const progressWidth = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-border-800 text-center">Track Progress</h1>
      <div className="bg-primary p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-4 w-full">
          <div className="relative flex items-center justify-between w-full mt-4">
            <div className="absolute left-0 right-0 h-2 bg-gray-300 rounded-full"></div>
            <div
              className="absolute left-0 h-2 bg-primary-500 rounded-full transition-all duration-300"
              style={{ width: `${progressWidth}%` }}
            ></div>
            {/* {tasks.map((task, index) => (
              <div
                key={task.task_id}
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  task.status === 'Completed'
                    ? 'bg-primary-500 border-primary-500'
                    : 'bg-gray-200 border-border-400'
                }`}
              >
                {task.status === 'Completed' ? (
                  <span className="text-black">✓</span>
                ) : (
                  <span className="text-border-500">{index + 1}</span>
                )}
              </div>
            ))} */}
             {Array.from({ length: tasks.length }).map((_, index) => (
              <div
                key={index}
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index < completedTasks ? 'bg-primary-500 border-primary-500' : 'bg-gray-200 border-gray-400'
                }`}
              >
                {index < completedTasks ? (
                  <span className="text-black">✓</span>
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
      </div>
    </div>
  );
}
