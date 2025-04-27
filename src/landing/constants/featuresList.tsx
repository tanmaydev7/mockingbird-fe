import { Braces, ChartArea, Columns3Cog, FastForward, Workflow, Wrench } from "lucide-react"

export const featuresList: Array<{
    icon: React.ReactNode,
    header: string,
    content: string
}> = [
    {
        icon: <Braces/>,
        header: "Create Mock APIs",
        content: "Quickly create mock endpoints with custom responses for all HTTP methods."
    },
    {
        icon: <Columns3Cog />,
        header: "Customize Responses",
        content: "Define custom response bodies, headers, and status codes for each endpoint"
    },
    {
        icon: <Workflow />,
        header: "Auto-generate Data",
        content: "Generate realistic fake data based on your schema with just one click."
    },
    {
        icon: <FastForward />,
        header: "Instant Deployment",
        content: "Your mock APIs are instantly available with a unique URL as soon as you create them."
    },
    {
        icon: <ChartArea />,
        header: "Intuitive Dashboard",
        content: "Manage all your mock APIs from a clean, developer-friendly dashboard."
    },
    {
        icon: <Wrench />,
        header: "Rapid Prototyping",
        content: "Accelerate your development workflow by eliminating backend dependencies."
    }
]