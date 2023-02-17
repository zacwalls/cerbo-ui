import React from 'react';

import { Icon } from '../Icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: string;
    leadingIcon?: boolean;
    primary?: boolean;
    border?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}

export function Button({ label = "", icon = "", leadingIcon = false, primary = false, border = true, onClick = (e) => { e.preventDefault() } }: ButtonProps) {
    const classes = (
        `py-2 
         px-4 
         rounded 
         focus:outline-none 
         focus:shadow-outline 
         ${border ? 'border' : ''}
         ${primary ?
            `bg-blue-600 
             hover:bg-blue-700
             border-blue-600
             text-white` :
            `border-gray-900
             bg-white
             text-gray-800`
        }`);

    return (
        <button type="button" className={classes} onClick={onClick}>
            <div className="flex justify-between">
                {leadingIcon && icon && <Icon name={icon as "close" | "plus" | "save" | "trash"} />}
                {label && <span className="mx-1">label</span>}
                {!leadingIcon && icon && <Icon name={icon as "close" | "plus" | "save" | "trash"} />}
            </div>
        </button>
    );
}