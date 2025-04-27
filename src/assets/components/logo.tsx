import logo from "@/assets/mocking-bird-mini.png"

type Props = {}

const Logo = (_props: Props) => {
  return (
    <a href='/' className='flex items-center gap-1'>
        <img className='h-8 object-contain' src={logo}/>
        <span>MockingBird</span>
    </a>
  )
}

export default Logo