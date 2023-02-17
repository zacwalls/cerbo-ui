import React from 'react';

import { Label } from './Label';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
}

export function Input({ label, placeholder="" }: InputProps) {
    return (
        <div className="flex flex-col">
            {label && <Label>{label}</Label>}
            <input type="text" className="border border-gray-400 rounded p-2" placeholder={placeholder} />
        </div>
    );
}