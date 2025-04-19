"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { LineChart, BarChart, PieChart } from "../components/Charts"
import { FaSun, FaCloudShowersHeavy, FaCloud } from "react-icons/fa"

const Dashboard = () => {
  const [selectedCrop, setSelectedCrop] = useState("all")

  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Farming Dashboard</h1>
              <p className="text-gray-600">Monitor your farm's performance and get insights</p>
            </div>

            <div className="flex items-center gap-4">
              <select value={selectedCrop} onChange={handleCropChange} className="form-control">
                <option value="all">All Crops</option>
                <option value="rice">Rice</option>
                <option value="wheat">Wheat</option>
                <option value="maize">Maize</option>
                <option value="cotton">Cotton</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card">
              <h3 className="text-sm font-medium text-gray-500">Total Yield</h3>
              <p className="text-gray-400 text-xs mb-2">Current Season</p>
              <div className="text-2xl font-bold">4,250 kg</div>
              <p className="text-xs text-gray-500">
                <span className="text-green-500">↑ 12%</span> from last season
              </p>
            </div>

            <div className="card">
              <h3 className="text-sm font-medium text-gray-500">Water Usage</h3>
              <p className="text-gray-400 text-xs mb-2">Current Season</p>
              <div className="text-2xl font-bold">12,450 L</div>
              <p className="text-xs text-gray-500">
                <span className="text-green-500">↓ 8%</span> from last season
              </p>
            </div>

            <div className="card">
              <h3 className="text-sm font-medium text-gray-500">Soil Health</h3>
              <p className="text-gray-400 text-xs mb-2">Current Reading</p>
              <div className="text-2xl font-bold">Good</div>
              <p className="text-xs text-gray-500">pH: 6.5, Organic Matter: 3.2%</p>
            </div>
          </div>

          <div className="tabs mb-8">
            <div className="tab active">Yield Analysis</div>
            <div className="tab">Soil Nutrients</div>
            <div className="tab">Water Management</div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-2">Crop Yield Trends</h3>
            <p className="text-gray-600 mb-4">Monthly yield data for the current year</p>

            <div className="h-[300px]">
              <LineChart />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Soil Nutrient Distribution</h3>
              <p className="text-gray-600 mb-4">Current NPK levels in your soil</p>
              <div className="h-[300px]">
                <PieChart />
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Water Usage by Crop</h3>
              <p className="text-gray-600 mb-4">Water consumption for different crops</p>
              <div className="h-[300px]">
                <BarChart />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Recommended Actions</h3>
              <p className="text-gray-600 mb-4">Based on current farm conditions</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mt-0.5">
                    High Priority
                  </span>
                  <div>
                    <h4 className="font-medium">Apply nitrogen fertilizer</h4>
                    <p className="text-sm text-gray-600">
                      Soil tests indicate nitrogen deficiency in the eastern field.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mt-0.5">
                    Medium Priority
                  </span>
                  <div>
                    <h4 className="font-medium">Increase irrigation frequency</h4>
                    <p className="text-sm text-gray-600">Weather forecast shows high temperatures next week.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mt-0.5">
                    Low Priority
                  </span>
                  <div>
                    <h4 className="font-medium">Plan crop rotation</h4>
                    <p className="text-sm text-gray-600">Consider rotating crops next season to improve soil health.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Weather Forecast</h3>
              <p className="text-gray-600 mb-4">5-day forecast for your location</p>
              <div className="grid grid-cols-5 gap-2 text-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Mon</p>
                  <div className="mx-auto w-8 h-8 flex items-center justify-center">
                    <FaSun className="text-yellow-500 text-2xl" />
                  </div>
                  <p className="text-sm">32°C</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Tue</p>
                  <div className="mx-auto w-8 h-8 flex items-center justify-center">
                    <FaSun className="text-yellow-500 text-2xl" />
                  </div>
                  <p className="text-sm">30°C</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Wed</p>
                  <div className="mx-auto w-8 h-8 flex items-center justify-center">
                    <FaCloud className="text-gray-400 text-2xl" />
                  </div>
                  <p className="text-sm">28°C</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Thu</p>
                  <div className="mx-auto w-8 h-8 flex items-center justify-center">
                    <FaCloudShowersHeavy className="text-blue-500 text-2xl" />
                  </div>
                  <p className="text-sm">25°C</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Fri</p>
                  <div className="mx-auto w-8 h-8 flex items-center justify-center">
                    <FaSun className="text-yellow-500 text-2xl" />
                  </div>
                  <p className="text-sm">29°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Dashboard
