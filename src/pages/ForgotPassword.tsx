import { useState } from "react"
import { Link } from "react-router"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RoutesPath } from "@/constants/routes"
import { Loader2 } from "lucide-react"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // TODO: Implement password reset logic
      console.log("Reset password for:", email)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
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
                Reset your password<br />and get back to mocking
              </h1>
            </div>

            {/* Feature Points */}
            <div className="flex-1 flex items-start">
              <div className="w-full">
                <div className="bg-black/40 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/90 font-medium">Secure Password Reset</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/90 font-medium">Quick Recovery Process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/90 font-medium">24/7 Support Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/90 font-medium">Instant Email Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-start justify-center p-4 sm:p-6 lg:p-12 bg-gray-50/50 max-h-screen overflow-auto">
        <Card className="w-full max-w-[min(100%,400px)] bg-white shadow-2xl border-0 h-fit">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Forgot Password</h2>
                <p className="text-sm text-gray-500">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="animate-spin"/> : "Reset Password"}
                </Button>
              </form>

              <div className="text-center text-sm">
                <Link
                  to={RoutesPath.LOGIN}
                  className="text-primary hover:text-primary/90 font-medium"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ForgotPassword 