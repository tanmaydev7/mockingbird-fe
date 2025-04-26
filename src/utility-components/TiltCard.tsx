import { cn } from "@/lib/utils"
import { useMotionValue , useSpring, useTransform , motion} from "framer-motion"

type Props = {
    className?: string;
    children: React.ReactNode
}

const TiltCard = (props: Props) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)
    const rotationDeg = 10;

    const rotateX = useTransform(
        mouseYSpring, 
        [-0.5, 0.5], 
        [`${rotationDeg}deg`, `-${rotationDeg}deg`] 
    )

    const rotateY = useTransform(
      mouseXSpring, 
      [-0.5, 0.5], 
      [`-${rotationDeg}deg`, `${rotationDeg}deg`] 
  )


    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const rect = (event.target as HTMLElement).getBoundingClientRect()
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        // -0.5 is done for angle thing to keep it between -0.5 to 0.5
        // otherwise without it is actual percentage
        const xAwayPercent = (mouseX / width) - 0.5;
        const yAwayPercent = (mouseY / height) - 0.5

        x.set(xAwayPercent)
        y.set(yAwayPercent)
    }
  const handleMouseLeave = (_event: React.MouseEvent<HTMLElement>) => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transformStyle: "preserve-3d", rotateX , rotateY}} className={cn("relative", props.className ?? "")}>
      <div style={{transformStyle: "preserve-3d", transform: "translateZ(75px)"}} className="w-full h-full">
        {props.children}
      </div>
    </motion.div>
  )
}

export default TiltCard