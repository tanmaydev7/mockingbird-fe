import logo from "@/assets/mocking-bird-mini.png"
import { Link } from "react-router"

type Props = {}

const Logo = (_props: Props) => {
  return (
    <Link to='/' className='flex items-center gap-1'>
        <img className='h-8 object-contain' src={logo}/>
        <span>MockingBird</span>
    </Link>
  )
}

export default Logo