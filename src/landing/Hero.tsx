import { Button } from "@/components/ui/button"
import { heroDesc, sampleAPIResponse } from "./constants/constant"
import { cn } from "@/lib/utils"
import TiltCard from "@/utility-components/TiltCard"
import { Link } from "react-router"
import { RoutesPath } from "@/constants/routes"

type Props = {}

export const Hero = (_props: Props) => {
  return (
    <div className={cn("bg-mb-3 p-4 px-8 flex flex-col", "lg:flex-row lg:items-center lg:py-8" )}>
        {/* left hand side */}
        <div className={cn("flex-1 p-8 px-0 self-center text-center", "lg:text-left lg:pb-36")}>
            <div className="lg:max-w-[600px]">
                <h1 className={cn("text-4xl font-medium", )}>Mock APIs.</h1>
                <h1 className="text-4xl font-medium text-mb-2">Real Progress.</h1>
                <p className={cn("text-muted-foreground text-sm mt-1", "sm:max-w-1/2 sm:mx-auto", "lg:mx-0 lg:max-w-[70%]")}>
                    {heroDesc}
                </p>
                <div className="mt-2">
                    <Button className="rounded-2xl px-8">
                        <Link to={RoutesPath.SIGNUP}>
                            Get Started
                        </Link>
                    </Button>
                </div>
            </div>
           
        </div>
        {/* right hand side */}
        <div className="flex-1">
            {/* Code preview */}
            <TiltCard className="container mx-auto">
                <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl p-4 overflow-hidden border shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-sm text-muted-foreground">mockapi.io/api/users</span>
                    </div>
                    <pre className="text-xs md:text-sm overflow-x-auto p-4 bg-secondary/50 rounded-lg">
                        {sampleAPIResponse}
                    </pre>
                </div>
            </TiltCard>
        </div>
    </div>
  )
}