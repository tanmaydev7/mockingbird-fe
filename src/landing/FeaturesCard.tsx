import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TiltCard from '@/utility-components/TiltCard'
import React from 'react'

type Props = {
    icon: React.ReactNode,
    header: string,
    content: string
}

export const FeaturesCard = (props: Props) => {
  return (
    <TiltCard>
        <Card className='gap-1 h-full'>
            <CardHeader>
                <CardTitle className='bg-mb-2 w-fit p-2 rounded-full text-white'>{props.icon}</CardTitle>
                <CardDescription className='text-mb-2 font-semibold text-xl'>{props.header}</CardDescription>
            </CardHeader>
            <CardContent className='text-muted-foreground'>
                {props.content}
            </CardContent>
        </Card>
    </TiltCard>
  )
}
