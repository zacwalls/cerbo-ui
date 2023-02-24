import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    border?: boolean;
}

const primaryClasses = `bg-blue-600 hover:bg-blue-700 border-blue-600 text-white`;
const secondaryClasses = `border-gray-900 bg-white text-gray-800`;

export function Button({ border, primary, ...props }: ButtonProps) {
    const classes = `py-1 px-4 rounded focus:outline-none focus:shadow-outline
                     ${primary ? primaryClasses : secondaryClasses} 
                     ${border ? 'border' : ''}`;

    return (
        <button
            type="button"
            className={classes}
            {...Object.entries(props).filter(([key]) => key !== 'border' && key !== 'primary')}
        >
            <div className="flex justify-between">
                {props.children && props.children}
            </div>
        </button>
    );
}