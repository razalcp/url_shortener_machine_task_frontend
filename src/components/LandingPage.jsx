import { Link } from "react-router-dom"
import { LinkIcon, BarChart3, Shield, Zap, Users, Globe, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">QuickLink</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 bg-transparent hover:bg-gray-100 rounded-md transition-colors">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
            Free URL Shortening Service
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Shorten URLs,
            <span className="text-blue-600"> Track Results</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform long, messy URLs into clean, short links. Get detailed analytics, manage your links, and boost
            your click-through rates with our powerful URL shortener.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md transition-colors">
                Start Shortening Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/login">
              <button className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 text-lg rounded-md transition-colors">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is URL Shortening Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is URL Shortening?</h2>
            <p className="text-lg text-gray-600 mb-8">
              URL shortening is a technique that takes a long URL and creates a shorter, more manageable version that
              redirects to the original link. Perfect for social media, email campaigns, and anywhere you need clean,
              professional-looking links.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <div className="mb-4">
                <span className="text-sm text-gray-500 font-medium">BEFORE:</span>
                <div className="bg-white p-3 rounded border mt-1 text-sm text-gray-700 break-all">
                  https://www.example-website.com/very-long-url-path/with-many-parameters?utm_source=social&utm_medium=facebook&utm_campaign=summer2024
                </div>
              </div>
              <div className="flex items-center justify-center my-4">
                <ArrowRight className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <span className="text-sm text-gray-500 font-medium">AFTER:</span>
                <div className="bg-white p-3 rounded border mt-1 text-sm text-blue-600 font-medium">
                  https://quicklink.co/abc123
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose QuickLink?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our URL shortener provides everything you need to create, manage, and track your shortened links
            effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <Zap className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Generate short links instantly. Our optimized servers ensure your links are created and ready to use in
              milliseconds.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-gray-600">
              Track clicks, locations, devices, and referrers. Get insights into how your links are performing with
              real-time data.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <Shield className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600">
              All links are scanned for malware and spam. Your data is encrypted and protected with enterprise-grade
              security.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <Users className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Management</h3>
            <p className="text-gray-600">
              Collaborate with your team. Share links, organize campaigns, and manage permissions all in one place.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <Globe className="h-12 w-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Domains</h3>
            <p className="text-gray-600">
              Use your own branded domain for short links. Build trust and brand recognition with every click.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <LinkIcon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bulk Shortening</h3>
            <p className="text-gray-600">
              Shorten hundreds of URLs at once. Import from CSV files and export your analytics for easy reporting.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get your first short link in under 30 seconds</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Paste Your URL</h3>
              <p className="text-gray-600">
                Copy and paste any long URL into our shortening tool. No registration required for basic use.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize & Create</h3>
              <p className="text-gray-600">
                Optionally customize your short link with a memorable alias, then click create to generate it instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share & Track</h3>
              <p className="text-gray-600">
                Share your short link anywhere and watch the analytics roll in. Monitor performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Social Media Marketing</h3>
                  <p className="text-gray-600">
                    Share clean links on Twitter, Instagram, Facebook, and LinkedIn without character limits.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-lg p-2 flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Campaigns</h3>
                  <p className="text-gray-600">Track email click-through rates and see which campaigns perform best.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">QR Code Generation</h3>
                  <p className="text-gray-600">
                    Create QR codes for print materials, business cards, and offline marketing.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-lg p-2 flex-shrink-0">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Affiliate Marketing</h3>
                  <p className="text-gray-600">
                    Hide long affiliate URLs and track which promotions drive the most conversions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 rounded-lg p-2 flex-shrink-0">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Event Promotion</h3>
                  <p className="text-gray-600">
                    Share event registration links and track attendance from different marketing channels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 rounded-lg p-2 flex-shrink-0">
                  <LinkIcon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Content Sharing</h3>
                  <p className="text-gray-600">
                    Share blog posts, videos, and resources with professional-looking short links.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Shortening?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of marketers, businesses, and creators who trust QuickLink for their URL shortening needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 text-lg rounded-md transition-colors font-semibold">
                Create Free Account
              </button>
            </Link>
            <Link to="/login">
              <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-blue-600 text-lg rounded-md transition-colors bg-transparent font-semibold">
                Sign In Now
              </button>
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-75">No credit card required • Free forever plan available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <LinkIcon className="h-6 w-6" />
                <span className="text-xl font-bold">QuickLink</span>
              </div>
              <p className="text-gray-400">
                The fastest and most reliable URL shortener for businesses and individuals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 QuickLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
