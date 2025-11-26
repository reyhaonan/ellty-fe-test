import { type DetailedHTMLProps, type SelectHTMLAttributes } from 'react'


const Select = (props: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>) => {
    return (
        <select
            {...props}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-priring-primary sm:text-sm"
        ></select>

    )
}

export default Select