"use client"

import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import {
  LinkIcon,
  Copy,
  ExternalLink,
  BarChart3,
  Calendar,
  Globe,
  Trash2,
  Plus,
  Search,
  Filter
} from "lucide-react"
import { getUserUrls, shorten } from "../services/userServices"
import userApi from "../utils/axiosConfig"

export default function DashboardPage() {
  const [shortenedUrl, setShortenedUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const [userUrls, setUserUrls] = useState([])
  const userInfo = JSON.parse(localStorage.getItem("userDetails"))

  const navigate = useNavigate()
  useEffect(() => {
    const fetchUserUrls = async () => {
      const userData = JSON.parse(localStorage.getItem("userDetails"))
      const userId = userData?._id
      if (!userId) return

      try {
        const response = await getUserUrls(userId)
        console.log("urls", response);

        setUserUrls(response.data.urls) // assuming API returns { urls: [...] }
      } catch (error) {
        console.error("Error fetching URLs:", error)
      }
    }

    fetchUserUrls()
  }, [shortenedUrl])

  const validationSchema = Yup.object().shape({
    originalUrl: Yup.string()
      .url("Please enter a valid URL (include http:// or https://)")
      .required("Please enter a URL"),
    customAlias: Yup.string()
  })



  const formik = useFormik({
    initialValues: {
      originalUrl: "",

    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true)
      setShowResult(false)
      const userData = JSON.parse(localStorage.getItem("userDetails"))
      const userId = userData?._id
      const payload = { ...values, userId }

      const response = await shorten(payload)

      setShortenedUrl(`${response.data.shortUrl}`)
      setIsLoading(false)
      setShowResult(true)
      resetForm()
    }

  })

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  const handleLogout = async () => {
    await userApi.post('/userLogout');
    localStorage.removeItem("userDetails"); // Clear on logout
    localStorage.setItem("userIsLogged", JSON.stringify(false));
    navigate('/', { replace: true })
  }

  const filteredUrls = userUrls.filter(
    (url) =>
      url.originalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
      url.alias.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <LinkIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">QuickLink</span>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome back, {userInfo.name}!</span>
              <button onClick={handleLogout} className="px-4 py-2 text-gray-600 hover:text-gray-800">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* URL Shortening Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Shorten a URL</h1>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="originalUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your long URL
              </label>
              <input
                id="originalUrl"
                type="url"
                {...formik.getFieldProps("originalUrl")}
                placeholder="https://example.com/very-long-url-path"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${formik.touched.originalUrl && formik.errors.originalUrl
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
              {formik.touched.originalUrl && formik.errors.originalUrl && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.originalUrl}</p>
              )}
            </div>



            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-md transition-colors font-medium flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Shortening...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Shorten URL
                </>
              )}
            </button>
          </form>

          {showResult && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <h3 className="text-lg font-semibold text-green-800 mb-2">URL Shortened Successfully!</h3>
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium text-gray-700">Short URL:</label>
                  <div className="flex items-center space-x-2 mt-1">
                    <input
                      type="text"
                      value={shortenedUrl}
                      readOnly
                      className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-blue-600 font-medium"
                    />
                    <button
                      onClick={() => copyToClipboard(shortenedUrl)}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    <a
                      href={shortenedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* URL List + Search */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Your Shortened URLs</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search URLs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
             
            </div>
          </div>

          {filteredUrls.length === 0 ? (
            <div className="text-center py-8">
              <LinkIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No URLs found. Create your first short link above!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredUrls.map((url) => (
                <div key={url.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <a
                          href={url.shortUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {url.shortUrl}
                        </a>
                        <button
                          onClick={() => copyToClipboard(url.shortUrl)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Copy className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{url.originalUrl}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          {url.clicks} clicks
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {url.createdAt}
                        </span>
                        <span className="flex items-center">
                          <Globe className="h-3 w-3 mr-1" />
                          Active
                        </span>
                      </div>
                    </div>
               
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid  gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-lg p-3">
                <LinkIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Links</p>
                <p className="text-2xl font-bold text-gray-900">{userUrls.length}</p>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}
