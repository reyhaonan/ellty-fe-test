import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

const Button = ({ children, className, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <button
            className={`bg-primary rounded-sm py-3 px-4 w-full hover:bg-primary-hover active:bg-primary transition-colors cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button