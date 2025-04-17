"use client"

import { useState } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaLeaf, FaTint, FaCloudRain, FaThermometerHalf, FaTachometerAlt, FaSeedling } from "react-icons/fa"

const Predict = () => {
  const [activeTab, setActiveTab] = useState("sliders")
  const [formData, setFormData] = useState({
    nitrogen: 50,
    phosphorus: 50,
    potassium: 50,
    temperature: 25,
    humidity: 50,
    ph: 6.5,
    rainfall: 100,
  })

  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSliderChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: Number.parseFloat(value),
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: Number.parseFloat(value),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post("http://localhost:5000/api/predict", formData)
      setPrediction(response.data)
    } catch (err) {
      console.error("Prediction error:", err)
      setError(err.response?.data?.error || "Failed to get prediction. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Crop Recommendation</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter your soil parameters and environmental conditions to get personalized crop recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-xl font-semibold mb-2">Soil and Environmental Parameters</h2>
                <p className="text-gray-600 mb-4">
                  Adjust the sliders or enter values directly to match your conditions
                </p>

                <div className="tabs">
                  <div
                    className={`tab ${activeTab === "sliders" ? "active" : ""}`}
                    onClick={() => setActiveTab("sliders")}
                  >
                    Sliders
                  </div>
                  <div
                    className={`tab ${activeTab === "manual" ? "active" : ""}`}
                    onClick={() => setActiveTab("manual")}
                  >
                    Manual Input
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className={`tab-content ${activeTab === "sliders" ? "active" : ""}`}>
                    <div className="space-y-6">
                      <div className="slider-container">
                        <div className="flex justify-between items-center mb-2">
                          <label htmlFor="nitrogen" className="flex items-center">
                            <FaLeaf className="text-green-500 mr-2" />
                            Nitrogen (N)
                          </label>
                          <span className="slider-value">{formData.nitrogen} kg/ha</span>
                        </div>
                        <input
                          type="range"
                          id="nitrogen"
                          name="nitrogen"
                          min="0"
                          max="140"
                          step="1"
                          value={formData.nitrogen}
                          onChange={handleSliderChange}
                          className="slider"
                        />
                      </div>

                      <div className="slider-container">
                        <div className="flex justify-between items-center mb-2">
                          <label htmlFor="phosphorus" className="flex items-center">
                            <FaLeaf className="text-green-500 mr-2" />
                            Phosphorus (P)
                          </label>
                          <span className="slider-value">{formData.phosphorus} kg/ha</span>
                        </div>
                        <input
                          type="range"
                          id="phosphorus"
                          name="phosphorus"
                          min="0"
                          max="140"
                          step="1"
                          value={formData.phosphorus}
                          onChange={handleSliderChange}
                          className="slider"
                        />
                      </div>

                      <div className="slider-container">
                        <div className="flex justify-between items-center mb-2">
                          <label htmlFor="potassium" className="flex items-center">
                            <FaLeaf className="text-green-500 mr-2" />
                            Potassium (K)
                          </label>
                          <span className="slider-value">{formData.potassium} kg/ha</span>
                        </div>
                        <input
                          type="range"
                          id="potassium"
                          name="potassium"
                          min="0"
                          max="140"
                          step="1"
                          value={formData.potassium}
                          onChange={handleSliderChange}
                          className="slider"
                        />
                      </div>

                      <div className="slider-container">
                        <div className="flex justify-between items-center mb-2">
                          <label htmlFor="temperature" className="flex items-center">
                            <FaThermometerHalf className="text-green-500 mr-2" />
                            Temperature
                          </label>
                          <span className="slider-value">{formData.temperature}°C</span>
                        </div>
                        <input
                          type="range"
                          id="temperature"
                          name="temperature"
                          min="0"
                          max="45"
                          step="0.1"
                          value={formData.temperature}
                          onChange={handleSliderChange}
                          className="slider"
                        />
                      </div>

                      <div className="slider-container">
                        <div className="flex justify-between items-center mb-2">
                          <label htmlFor="humidity" className="flex items-center">
                            <FaTint className="text-green-500 mr-2" />
                            Humidity
                          </label>
                          <span className="slider-value">{formData.humidity}%</span>
                        </div>
                        <input
                          type="range"
                          id="humidity"
                          name="humidity"
                          min="0"
                          max="100"
                          step="1"
                          value={formData.humidity}
                          onChange={handleSliderChange}
                          className="slider"
                        />
                      </div>

                      <div className="slider-container">
                        <div className="flex justify-between items-center mb-2">
                          <label htmlFor="ph" className="flex items-center">
                            <FaTachometerAlt className="text-green-500 mr-2" />
                            pH Value
                          </label>
                          <span className="slider-value">{formData.ph}</span>
                        </div>
                        <input
                          type="range"
                          id="ph"
                          name="ph"
                          min="0"
                          max="14"
                          step="0.1"
                          value={formData.ph}
                          onChange={handleSliderChange}
                          className="slider"
                        />
                      </div>

                      <div className="slider-container">
                        <div className="flex justify-between items-center mb-2">
                          <label htmlFor="rainfall" className="flex items-center">
                            <FaCloudRain className="text-green-500 mr-2" />
                            Rainfall
                          </label>
                          <span className="slider-value">{formData.rainfall} mm</span>
                        </div>
                        <input
                          type="range"
                          id="rainfall"
                          name="rainfall"
                          min="0"
                          max="300"
                          step="1"
                          value={formData.rainfall}
                          onChange={handleSliderChange}
                          className="slider"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`tab-content ${activeTab === "manual" ? "active" : ""}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label htmlFor="nitrogen-input" className="flex items-center">
                          <FaLeaf className="text-green-500 mr-2" />
                          Nitrogen (N) (kg/ha)
                        </label>
                        <input
                          id="nitrogen-input"
                          name="nitrogen"
                          type="number"
                          value={formData.nitrogen}
                          onChange={handleInputChange}
                          min="0"
                          max="140"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phosphorus-input" className="flex items-center">
                          <FaLeaf className="text-green-500 mr-2" />
                          Phosphorus (P) (kg/ha)
                        </label>
                        <input
                          id="phosphorus-input"
                          name="phosphorus"
                          type="number"
                          value={formData.phosphorus}
                          onChange={handleInputChange}
                          min="0"
                          max="140"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="potassium-input" className="flex items-center">
                          <FaLeaf className="text-green-500 mr-2" />
                          Potassium (K) (kg/ha)
                        </label>
                        <input
                          id="potassium-input"
                          name="potassium"
                          type="number"
                          value={formData.potassium}
                          onChange={handleInputChange}
                          min="0"
                          max="140"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="temperature-input" className="flex items-center">
                          <FaThermometerHalf className="text-green-500 mr-2" />
                          Temperature (°C)
                        </label>
                        <input
                          id="temperature-input"
                          name="temperature"
                          type="number"
                          value={formData.temperature}
                          onChange={handleInputChange}
                          min="0"
                          max="45"
                          step="0.1"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="humidity-input" className="flex items-center">
                          <FaTint className="text-green-500 mr-2" />
                          Humidity (%)
                        </label>
                        <input
                          id="humidity-input"
                          name="humidity"
                          type="number"
                          value={formData.humidity}
                          onChange={handleInputChange}
                          min="0"
                          max="100"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="ph-input" className="flex items-center">
                          <FaTachometerAlt className="text-green-500 mr-2" />
                          pH Value
                        </label>
                        <input
                          id="ph-input"
                          name="ph"
                          type="number"
                          value={formData.ph}
                          onChange={handleInputChange}
                          min="0"
                          max="14"
                          step="0.1"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="rainfall-input" className="flex items-center">
                          <FaCloudRain className="text-green-500 mr-2" />
                          Rainfall (mm)
                        </label>
                        <input
                          id="rainfall-input"
                          name="rainfall"
                          type="number"
                          value={formData.rainfall}
                          onChange={handleInputChange}
                          min="0"
                          max="300"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 mb-4">
                      {error}
                    </div>
                  )}

                  <button type="submit" className="btn w-full mt-6" disabled={loading}>
                    {loading ? "Analyzing..." : "Get Crop Recommendation"}
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="card h-full">
                <h2 className="text-xl font-semibold mb-2">Recommendation Results</h2>
                <p className="text-gray-600 mb-4">
                  Our AI model will analyze your inputs and provide the best crop recommendation
                </p>

                {prediction ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <FaSeedling className="text-green-500 text-5xl mx-auto mb-2" />
                      <h3 className="text-2xl font-bold capitalize">{prediction.crop}</h3>
                      <p className="text-sm text-gray-600">Recommended with {prediction.confidence}% confidence</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <div>
                        <h4 className="font-semibold mb-1">Recommended Fertilizer</h4>
                        <p className="text-sm text-gray-600">{prediction.fertilizer}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-1">Water Management</h4>
                        <p className="text-sm text-gray-600">{prediction.waterSaving}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-1">Additional Tips</h4>
                        <p className="text-sm text-gray-600">{prediction.additionalTips}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FaSeedling className="text-gray-300 text-5xl mx-auto mb-4" />
                    <p className="text-gray-500">
                      Fill in the form and submit to get your personalized crop recommendation
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Predict
