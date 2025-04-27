import { Header } from "@/landing/Header"
import { Outlet } from "react-router"

type Props = {}

const LandingLayout = (_props: Props) => {
  return (
    <div className='w-full h-full flex flex-col overflow-auto'>
        <Header />
        <Outlet/>
    </div>
  )
}

export default LandingLayout