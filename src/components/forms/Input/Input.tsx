import React from 'react';

import { FieldWithLabel } from '../FieldWithLabel/FieldWithLabel';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelPosition?: 'top' | 'left' | 'right' | 'bottom';
    placeholder?: string;
}

export function Input({ label, labelPosition='top', placeholder, ...props }: InputProps) {
    return (
        <FieldWithLabel label={label} labelPosition={labelPosition}>
            <input type="text" className="border border-gray-400 rounded p-2" placeholder={placeholder} {...props} />
        </FieldWithLabel>
    );
}