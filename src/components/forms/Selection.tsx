import React from 'react';

interface SelectionProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type: 'checkbox' | 'radio';
}

export function Selection({ label, type }: SelectionProps) {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type={type} />
            {label && <span className="ml-3 text-sm font-medium text-black">{label}</span>}
        </label>
    );
}