import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"
import { RoutesPath } from "@/constants/routes"
import logo from "@/assets/mocking-bird-mini.png"

const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement login logic
  }

  const handleGoogleLogin = () => {
    // TODO: Implement Google SSO login
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Hero Section */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#1E1E1E] flex-col">
        {/* Gradient overlay */}
        <div className="w-full h-full relative flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col p-12">
            <div className="space-y-2 mb-16">
              <div className="inline-flex items-center gap-2 text-white/60 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>MockingBird API</span>
              </div>
              <h1 className="text-3xl font-bold text-white">
                Build frontends faster<br />with instant mock APIs
              </h1>
            </div>

            {/* Feature Points */}
            <div className="flex-1 flex items-start">
              <div className="w-full">
                <div className="bg-black/40 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/90 font-medium">Realistic Data Generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/90 font-medium">Customizable Response Times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/90 font-medium">Error Scenario Testing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/90 font-medium">API Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center lg:items-start justify-center p-4 sm:p-6 lg:p-12 bg-gray-50/50 max-h-screen overflow-auto">
        <Card className="w-full max-w-[min(100%,400px)] bg-white shadow-2xl border-0 h-fit">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <Link to="/" className="hover:opacity-80 transition-opacity">
                  <img src={logo} alt="MockingBird" className="h-8 sm:h-10 lg:h-12 w-auto" />
                </Link>
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Sign in to your account</h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                    Enter your details below to continue
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  required
                  className="w-full h-9 sm:h-10 lg:h-11 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="w-full h-9 sm:h-10 lg:h-11 text-sm sm:text-base"
                />
              </div>
              <div className="flex items-center justify-end">
                <Link to={RoutesPath.FORGOT_PASSWORD} className="text-xs sm:text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                    Forgot password?
                  </Link>
              </div>
              <Button type="submit" className="w-full h-9 sm:h-10 lg:h-11 text-sm sm:text-base font-medium">
                Sign in
              </Button>
            </form>

            <div className="relative my-6 sm:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            <Button
              variant="outline"
              type="button"
              className="w-full h-9 sm:h-10 lg:h-11 text-sm sm:text-base font-medium border-2"
              onClick={handleGoogleLogin}
            >
              <svg className="mr-2 h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Continue with Google
            </Button>

            <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login