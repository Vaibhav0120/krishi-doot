import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaTint, FaSeedling, FaChartBar } from "react-icons/fa"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Smart Farming Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get intelligent crop recommendations based on soil conditions and weather data to maximize your yield and
              sustainability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/predict" className="btn">
                Get Crop Recommendations
              </Link>
              <Link to="/dashboard" className="btn btn-outline">
                View Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-green-50">
          <div className="container mx-auto px-4">
            <div className="section-title">
              <h2>How KrishiDoot Helps You</h2>
              <p>
                Our intelligent system analyzes multiple factors to provide you with the best farming recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="feature-icon">
                  <FaSeedling />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Crop Recommendations</h3>
                <p className="text-gray-600">
                  Get personalized crop suggestions based on your soil composition, climate, and local conditions.
                </p>
              </div>

              <div className="card">
                <div className="feature-icon">
                  <FaTint />
                </div>
                <h3 className="text-xl font-semibold mb-2">Water Management</h3>
                <p className="text-gray-600">
                  Optimize your irrigation schedule based on soil moisture, rainfall predictions, and crop requirements.
                </p>
              </div>

              <div className="card">
                <div className="feature-icon">
                  <FaChartBar />
                </div>
                <h3 className="text-xl font-semibold mb-2">Yield Prediction</h3>
                <p className="text-gray-600">
                  Forecast your harvest yield using advanced machine learning models trained on historical data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="section-title">
              <h2>How It Works</h2>
              <p>Our simple 3-step process helps you make data-driven farming decisions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-500">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Input Your Data</h3>
                <p className="text-gray-600">Enter soil parameters, location, and current conditions.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-500">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">Our ML model processes your data and environmental factors.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-500">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
                <p className="text-gray-600">Receive detailed crop and farming practice suggestions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section bg-green-50">
          <div className="container mx-auto px-4">
            <div className="section-title">
              <h2>Farmer Success Stories</h2>
              <p>See how KrishiDoot has helped farmers across the country.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-green-500 font-bold">RS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rajesh Singh</h4>
                    <p className="text-sm text-gray-500">Punjab Farmer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "KrishiDoot helped me increase my wheat yield by 30% by recommending the right fertilizer mix and
                  irrigation schedule."
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-green-500 font-bold">AP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Anita Patel</h4>
                    <p className="text-sm text-gray-500">Gujarat Farmer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The crop recommendations were spot on! I switched from cotton to groundnuts based on the soil
                  analysis and doubled my profits."
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-green-500 font-bold">MK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mohan Kumar</h4>
                    <p className="text-sm text-gray-500">Karnataka Farmer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I've been farming for 20 years, but KrishiDoot taught me new techniques that helped me conserve water
                  and improve soil health."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-green-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who are using data-driven insights to improve their yields and sustainability.
            </p>
            <Link to="/predict" className="btn bg-white text-green-500 hover:bg-gray-100">
              Get Started Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
