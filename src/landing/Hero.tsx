import { Button } from "@/components/ui/button"
import { heroDesc, sampleAPIResponse } from "./constants/constant"
import { cn } from "@/lib/utils"
import TiltCard from "@/utility-components/TiltCard"

type Props = {}

export const Hero = (props: Props) => {
  return (
    <div className={cn("bg-mb-3 p-4 flex-1 flex flex-col overflow-x-hidden", "lg:flex-row lg:items-center lg:px-12" )}>
        {/* left hand side */}
        <div className={cn("flex-1 p-8 self-center text-center", "lg:text-left lg:pb-36")}>
            <div className="lg:max-w-[600px]">
                <h1 className={cn("text-4xl font-medium", )}>Mock APIs.</h1>
                <h1 className="text-4xl font-medium text-mb-2">Real Progress.</h1>
                <p className={cn("text-sm mt-1", "sm:max-w-1/2 sm:mx-auto", "lg:mx-0")}>
                    {heroDesc}
                </p>
                <div className="mt-2">
                    <Button className="rounded-2xl px-8">
                        Get Started
                    </Button>
                </div>
            </div>
           
        </div>
        {/* right hand side */}
        <div className="flex-1">
            {/* Code preview */}
            <TiltCard className="container mx-auto lg:px-4">
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