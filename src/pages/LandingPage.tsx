import { Features } from '@/landing/Features'
import { Footer } from '@/landing/Footer'
import { Hero } from '@/landing/Hero'
import { Testimonials } from '@/landing/Testimonials'
import { TryDemo } from '@/landing/TryDemo'

type Props = {}

const LandingPage = (_props: Props) => {
  return (
    <>
        <Hero/>
        <Features/>
        <Testimonials/>
        <TryDemo/>
        <Footer/>
    </>
  )
}

export default LandingPage