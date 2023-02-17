import React from "react";

import { Label } from "./Label";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    sublabel?: string;
    placeholder?: string;
}

export function Textarea({ label, sublabel, placeholder }: TextareaProps) {
    return (
        <div className="flex flex-col">
            {label && <Label>{label}</Label>}
            <textarea className="border border-gray-400 rounded p-2 resize-none" placeholder={placeholder} />
            {sublabel && <label className="block mt-1 text-gray-400 text-xs">{sublabel}</label>}
        </div>
    );
}