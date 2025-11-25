import type { DetailedHTMLProps, HTMLAttributes } from "react"

const Card = ({ children, className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div className={`rounded-md border border-[#EEEEEE] px-4 py-2.5 card-shadow ${className}`} {...props}>{children}</div>
    )
}

export default Card