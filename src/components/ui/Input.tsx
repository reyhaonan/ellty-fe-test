import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react'


const Input = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return (
        <input
            {...props}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-priring-primary sm:text-sm"
        />
    )
}

export default Input