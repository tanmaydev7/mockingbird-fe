import { Header } from '@/landing/header'
import { Hero } from '@/landing/Hero'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col'>
        <Header/>
        <Hero/>
    </div>
  )
}

export default LandingPage