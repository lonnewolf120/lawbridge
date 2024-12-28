
import { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController, CategoryScale } from 'chart.js';

// Register the necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend, DoughnutController, CategoryScale);

interface ProgressBarProps {
  progress: number; // The progress as a percentage (e.g., 70 for 70%)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      // Create the chart instance
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'Remaining'],
          datasets: [
            {
              data: [20, 100 - 30], // Use the progress and remaining data
              backgroundColor: ['#4caf50', '#e0e0e0'], // Colors for progress and remaining
              borderColor: '#fff', // White border
              borderWidth: 10, // Make the border thinner for a rounded effect
              radius: '80%', // Adjust the radius to make it look like a progress bar
            },
          ],
        },
        options: {
          cutout: '80%', // Hollow out the center to emphasize the border
          rotation: -90, // Start the progress from the top
          circumference: 180, // Make it a half-circle
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              enabled: false, // Disable tooltip
            },
          },
        },
      });
    }
  }, [progress]);

  return <canvas ref={chartRef} style={{ width: '300px', height: '300px' }} />;
};

export default ProgressBar;