import { Button } from "@/components/ui/button"
import { RoutesPath } from "@/constants/routes"
import { Link } from "react-router"
type Props = {}

export const TryDemo = (_props: Props) => {
  return (
    <div className='w-full flex flex-col p-8 px-8 bg-mb-3'>
        <div className="w-full flex flex-col items-center text-center">
            <h3 className="text-3xl font-medium mt-4">
                Ready to accelerate your frontend development?
            </h3>
            <p className="text-muted-foreground mt-4 md:max-w-[550px]">
                 Join thousands of developers who are already using MockAPI to streamline their workflow.
            </p>
        </div>
        <div className="w-full text-center mt-8 flex gap-4 justify-center">
            <Button variant={"default"} className="px-8" asChild>
                <Link to={RoutesPath.SIGNUP}>
                    Get Started
                </Link>
            </Button>
            <Button variant={"outline"} className="px-8" asChild>
                <Link to={RoutesPath.DEMO}>
                    Try Demo
                </Link>
            </Button>
        </div>
    </div>
  )
}