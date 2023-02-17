import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: string;
    leadingIcon?: boolean;
    primary?: boolean;
}

export function Button({ label = "", icon = "", leadingIcon = false, primary = false }: ButtonProps) {
    const bgColor = primary ? 'bg-blue-600' : '';
    const border = primary ? 'border-blue-600' : 'border-gray-400';
    const fontColor = primary ? 'text-white' : 'text-gray-800';

    return (
        <button type="button" className={`p-2 rounded ${bgColor} ${border} ${fontColor}`}>
            {leadingIcon && <span>{icon}</span>}
            {label && label}
            {!leadingIcon && <span>{icon}</span>}
        </button>
    );
}