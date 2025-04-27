import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Logo from "@/assets/components/logo"
type Props = {}

export const Header = (_props: Props) => {
  return (
    <div className={cn("flex items-center justify-between border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50 p-4 px-8")}>
        <Logo/>
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