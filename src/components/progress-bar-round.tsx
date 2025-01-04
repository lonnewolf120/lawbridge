'use client'
import { useEffect, useRef } from 'react'
import { Chart, ArcElement, Tooltip, Legend, DoughnutController, CategoryScale } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend, DoughnutController, CategoryScale)

interface ProgressBarProps {
    progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null)
    const chartInstanceRef = useRef<Chart | null>(null)

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy()
            }
            chartInstanceRef.current = new Chart(chartRef.current, {
                type: 'doughnut',
                data: {
                    labels: ['Completed', 'Remaining'],
                    datasets: [
                        {
                            data: [progress, 100 - progress],
                            backgroundColor: ['#4caf50', '#e0e0e0'],
                            borderColor: '#fff',
                            borderWidth: 5,
                        },
                    ],
                },
                options: {
                    cutout: '80%',
                    rotation: -90,
                    circumference: 180,
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            enabled: false,
                        },
                    },
                },
            })
        }
    }, [progress])

    return (
        <div className="relative" style={{ width: '150px', height: '150px' }}>
            <canvas ref={chartRef} />
            <div className="absolute inset-0 flex items-center justify-center mt-20 text-xl font-semibold">
                {`${progress}%`}
            </div>
        </div>
    )
}

export { ProgressBar }