import { Features } from '@/landing/Features'
import { Footer } from '@/landing/Footer'
import { Header } from '@/landing/header'
import { Hero } from '@/landing/Hero'
import { Testimonials } from '@/landing/Testimonials'
import { TryDemo } from '@/landing/TryDemo'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col overflow-auto'>
        <Header/>
        <Hero/>
        <Features/>
        <Testimonials/>
        <TryDemo/>
        <Footer/>
    </div>
  )
}

export default LandingPage