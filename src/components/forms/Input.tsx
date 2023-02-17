import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
}

export function Input({ label, placeholder="" }: InputProps) {
    return (
        <div className="flex flex-col">
            {label && <label className="text-gray-600 text-sm">{label}</label>}
            <input type="text" className="border border-gray-400 rounded p-2" placeholder={placeholder} />
        </div>
    );
}