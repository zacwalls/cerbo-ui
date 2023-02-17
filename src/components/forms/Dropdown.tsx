import React from 'react';

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    placeholder?: string;
    title?: string;
    options: string[];
}

export function Dropdown({ label, options, placeholder, title="" }: DropdownProps) {
    return (
        <div className="flex flex-col">
            {label && <label className="text-gray-600 text-sm">{label}</label>}
            <select title={title} className="border border-gray-400 rounded p-2">
                {placeholder && <option value="" disabled selected>{placeholder}</option>}
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
}