import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import clsx from "clsx"

type ButtonVariant = "primary" | "secondary" | "outline" | "danger"
type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    variant?: ButtonVariant
    size?: ButtonSize
}

const Button = ({
    children,
    className,
    variant = "primary",
    size = "md",
    ...props
}: ButtonProps) => {
    const variantClasses: Record<ButtonVariant, string> = {
        primary: "bg-primary hover:bg-primary-hover text-black",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
        outline:
            "border border-gray-400 text-gray-900 hover:bg-gray-100 active:bg-gray-200",
        danger: "bg-red-500 hover:bg-red-600 text-white",
    }

    const sizeClasses: Record<ButtonSize, string> = {
        sm: "text-sm py-1.5 px-3",
        md: "text-base py-2.5 px-4",
        lg: "text-lg py-3 px-5",
    }

    return (
        <button
            className={clsx(
                "rounded-sm w-full transition-colors cursor-pointer",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
