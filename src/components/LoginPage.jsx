
"use client"

import { Link, useNavigate } from "react-router-dom"
import { LinkIcon } from "lucide-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { toast } from "sonner"
import { login } from "../services/userServices"



const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^([a-zA-Z][a-zA-Z0-9._-]*)@(gmail\.com|yahoo\.com|outlook\.com)$/,
      "Invalid email format"
    )
    .required("Email is required"),

  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character"
    )
    .required("Password is required"),
})

export default function LoginPage() {
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        // console.log("login values ",values);
        const response = await login(values)
        // const response = await userApi.post("/login", values)
        console.log("after login response ", response.data.userData);

        // dispatch(addUserData(response.data.userData))
        localStorage.setItem("userIsLogged", JSON.stringify(true))
        const { password, ...safeUserData } = response.data.userData;
        localStorage.setItem("userDetails", JSON.stringify(safeUserData));

        navigate("/dashboard", { replace: true })
      } catch (error) {
        const msg = error?.response?.data?.message
        if (msg === "Email not found") {
          toast.error("Email not found", { position: "top-center" })
        } else if (msg === "Wrong password") {
          toast.error("Password is wrong", { position: "top-center" })
        } else if (msg === "User is blocked") {
          toast.error("Your account has been blocked, please contact with our team.", {
            position: "top-center",
          })
        } else {
          toast.error("Something went wrong, please try again later.", {
            position: "top-center",
          })
        }
      }
    },
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <LinkIcon className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">QuickLink</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Welcome Back</h1>
            <p className="text-gray-600 mt-2">
              Sign in to your account to manage your short links
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border ${formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className={`w-full px-3 py-2 border ${formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
              )}
            </div>



            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors font-medium"
            >
              {formik.isSubmitting ? "Signing In..." : "Sign In"}
            </button>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline font-medium">
                Sign up for free
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
