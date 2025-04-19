import { Bar, Line, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

export const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Yield (kg)",
        data: [0, 0, 0, 0, 250, 400, 800, 1200, 1500, 0, 0, 0],
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.3,
      },
      {
        label: "Previous Year",
        data: [0, 0, 0, 0, 200, 350, 700, 1100, 1300, 0, 0, 0],
        borderColor: "rgb(148, 163, 184)",
        backgroundColor: "rgba(148, 163, 184, 0.5)",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Line data={data} options={options} style={{ height: "300px" }} />
}

export const BarChart = () => {
  const data = {
    labels: ["Rice", "Wheat", "Maize", "Cotton"],
    datasets: [
      {
        label: "Water Usage (L)",
        data: [4500, 3200, 2800, 5100],
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        borderColor: "rgb(34, 197, 94)",
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Bar data={data} options={options} style={{ height: "300px" }} />
}

export const PieChart = () => {
  const data = {
    labels: ["Nitrogen (N)", "Phosphorus (P)", "Potassium (K)"],
    datasets: [
      {
        label: "Soil Nutrients",
        data: [65, 20, 15],
        backgroundColor: ["rgba(34, 197, 94, 0.7)", "rgba(59, 130, 246, 0.7)", "rgba(249, 115, 22, 0.7)"],
        borderColor: ["rgb(34, 197, 94)", "rgb(59, 130, 246)", "rgb(249, 115, 22)"],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  }

  return <Pie data={data} options={options} style={{ height: "300px" }} />
}

const Charts = { LineChart, BarChart, PieChart }
export default Charts
