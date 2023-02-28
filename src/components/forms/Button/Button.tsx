import React from 'react';
import { filterProps } from '../../../utils/Components';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    border?: boolean;
}

const primaryClasses = `bg-blue-600 hover:bg-blue-700 border-blue-600 text-white`;
const secondaryClasses = `border-gray-300 bg-transparent text-gray-800`;

export function Button({ border, primary, ...props }: ButtonProps) {
    const classes = `py-1 px-4 rounded focus:outline-none focus:shadow-outline
                     ${primary ? primaryClasses : secondaryClasses} 
                     ${border ? 'border' : ''}`;

    return (
        <button
            type="button"
            className={classes}
            {...filterProps(props, ['primary', 'border'])}
        >
            <div className="flex justify-between items-center">
                {props.children && props.children}
            </div>
        </button>
    );
}