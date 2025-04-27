import Logo from "@/assets/components/logo"
import Github from "@/assets/github.svg?react"
import Linkedin from "@/assets/linkedin.svg?react"
import { footerList } from "./constants/footerList"
type Props = {}

export const Footer = (props: Props) => {
  return (
    <div className="w-full px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
            <div className="space-y-2 mb-4 md:mb-0 text-center md:text-left">
                <div className="flex justify-center md:justify-start">
                <Logo/>
                </div>
                <h4 className="text-sm text-muted-foreground">
                     Create and manage mock APIs for frontend development.
                </h4>
                <div className="flex gap-2 justify-center items-center md:justify-start ">
                    <a href="https://github.com/tanmaydev7/mockingbird">
                        <Github className="w-6 h-6"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tanmay-maheshwari-4962a721a/">
                        <Linkedin className="w-6 h-6"/>
                    </a>
                </div>
            </div>
            {
                footerList.map(footer => {
                    return (
                        <div className="mb-4 md:mb-0 text-center md:text-left" key={footer.name}>
                            <div className="font-semibold">{footer.name}</div>
                            <div className="space-y-4 mt-4">
                                {
                                    footer.links.map(link => (
                                        <a className="block text-muted-foreground" href={link.link} key={link.label}>
                                            {link.label}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="w-full text-center text-muted-foreground mt-8">
            © 2025 MockingBird. All rights reserved.
        </div>
    </div>
  )
}