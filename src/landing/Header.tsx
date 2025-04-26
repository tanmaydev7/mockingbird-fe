import React from 'react'
import logo from "@/assets/mocking-bird-mini.png"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
type Props = {}

export const Header = (props: Props) => {
  return (
    <div className={cn("flex items-center justify-between border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50 p-4")}>
        <a href='/' className='flex items-center gap-1'>
            <img className='h-8 object-contain' src={logo}/>
            <span>MockingBird</span>
        </a>
        <div className='flex gap-2 items-center justify-between'>
            <Button variant={'outline'}>
                Login
            </Button>
            <Button>
                Signup
            </Button>
        </div>
    </div>
  )
}