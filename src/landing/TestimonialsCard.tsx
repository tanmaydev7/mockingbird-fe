import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TiltCard from "@/utility-components/TiltCard"

export type TestimonialsCardProps = {
    initials: string,
    name: string,
    position: string,
    testimonial: string,
    className?: string
}

export const TestimonialsCard = (props: TestimonialsCardProps) => {
  return (
    <TiltCard className={props.className}>
        <Card className='gap-1 h-full'>
            <CardHeader>
                <CardTitle className="flex gap-2">
                    <div className='bg-mb-2 w-10 h-10 justify-center rounded-[100%] text-white flex items-center aspect-square'>
                        {props.initials}
                    </div>
                    <div className="text-sm space-y-1">
                        <div className="font-semibold">{props.name}</div>
                        <div className="text-muted-foreground">{props.position}</div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground'>
                {props.testimonial}
            </CardContent>
        </Card>
    </TiltCard>
  )
}