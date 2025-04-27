import { Badge } from "@/components/ui/badge"
import { SparklesIcon } from "lucide-react"
import { FeaturesCard } from "./FeaturesCard"
import { featuresList } from "./constants/featuresList"
import { cn } from "@/lib/utils"

type Props = {}

export const Features = (props: Props) => {
  return (
    <div className='w-full flex flex-col p-8 px-8 bg-mb-4/40'>
        <div className="w-full flex flex-col items-center text-center">
            <Badge variant={"outline"}>
                Features
                <SparklesIcon className="w-10 h-10"/>
            </Badge>
            <h3 className="text-3xl font-medium mt-4">
                Powerful Tools for Developers
            </h3>
            <p className="text-muted-foreground mt-4 md:max-w-[550px]">
            Everything you need to create realistic mock APIs for your frontend development workflow.
            </p>
        </div>
        <div className={cn("mt-8 grid grid-cols-1 gap-8", "sm:grid-cols-2", "md:grid-cols-3", "")}>
            {
                featuresList.map(features => {
                    return (
                        <FeaturesCard
                            icon={features.icon}
                            content={features.content}
                            header={features.header}
                            key={features.header}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}