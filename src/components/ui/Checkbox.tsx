type CheckboxRowProps = {
    label: string;
    checked: boolean;
    onChange: (value: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxRowProps) => {
    return (
        <div
            className="flex items-center justify-between w-full px-4 py-3 rounded-md cursor-pointer group"
            onClick={() => onChange(!checked)}
        >
            <span className="text-sm select-none">{label}</span>

            <div
                className={`size-6 rounded-md flex items-center justify-center transition-all group-active:ring-3 ring-checkbox-ring
                ${checked ?
                        "bg-checkbox-active group-active:bg-checkbox-active-press border-transparent" :
                        "bg-white border border-checkbox-border group-hover:border-checkbox-hover"} 
        `}
            >
                <svg className={checked ? "text-white" : "text-white group-active:text-[#878787] group-hover:text-[#e3e3e3]"} width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.500008 6.572L6.0488 11.5072C6.06926 11.5254 6.10056 11.5237 6.11899 11.5035L16.14 0.5" stroke="currentColor" stroke-linecap="round" />
                </svg>
            </div>
        </div>
    );
}


export default Checkbox