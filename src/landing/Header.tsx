import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Logo from "@/assets/components/logo"
import { Link } from 'react-router'
import { RoutesPath } from '@/constants/routes'
type Props = {}

export const Header = (_props: Props) => {
  return (
    <div className={cn("flex items-center justify-between border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50 p-4 px-8")}>
        <Logo/>
        <div className='flex gap-2 items-center justify-between'>
            <Button asChild variant={'outline'}>
                <Link to={RoutesPath.LOGIN}>
                  Login
                </Link>
            </Button>
            <Button asChild>
              <Link to={RoutesPath.SIGNUP}>
                  Signup
              </Link>
            </Button>
        </div>
    </div>
  )
}