import React from "react";

import { FieldWithLabel } from "../FieldWithLabel/FieldWithLabel";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    labelPosition?: "top" | "left" | "right" | "bottom";
    placeholder?: string;
}

export function Textarea({ label, labelPosition, placeholder, ...props }: TextareaProps) {
    return (
        <FieldWithLabel label={label} labelPosition={labelPosition}>
            <textarea 
                className="border border-gray-400 rounded p-2 resize-none" 
                placeholder={placeholder}
                {...props}
            />
        </FieldWithLabel>
    );
}