import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { TestimonialsCard } from "./TestimonialsCard"
import { testimonialsList } from "./constants/testimonialsList"

type Props = {}

export const Testimonials = (props: Props) => {
  return (
    <div className='w-full flex flex-col p-8 px-8'>
        <div className="w-full flex flex-col items-center text-center">
            <Badge variant={"outline"}>
                Testimonials
                {/* <SparklesIcon className="w-10 h-10"/> */}
            </Badge>
            <h3 className="text-3xl font-medium mt-4">
                Loved by Developers
            </h3>
            <p className="text-muted-foreground mt-4 md:max-w-[550px]">
                See what frontend developers are saying about MockingBird.
            </p>
        </div>
        <div className={cn("mt-8 grid grid-cols-1 gap-8", "sm:grid-cols-4", "md:grid-cols-3")}>
            {
                testimonialsList.map((testimonials, idx, arr) => {
                    return (
                        <TestimonialsCard
                        className={cn("sm:col-span-2", (idx === (arr.length - 1)) &&  "sm:row-start-2 sm:!col-start-2", "md:col-span-1 md:row-start-auto md:!col-start-auto")}
                            initials={testimonials.initials}
                            name={testimonials.name}
                            position={testimonials.position}
                            testimonial={testimonials.testimonial}
                            key={testimonials.testimonial}
                        />
                    )
                })
            }
            
        </div>
    </div>
  )
}