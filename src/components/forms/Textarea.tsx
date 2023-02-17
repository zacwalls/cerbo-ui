import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    sublabel?: string;
    placeholder?: string;
}

export function Textarea({ label, sublabel, placeholder }: TextareaProps) {
    return (
        <div className="flex flex-col">
            {label && <label className="text-gray-600 text-sm">{label}</label>}
            <textarea className="border border-gray-400 rounded p-2 resize-none" placeholder={placeholder} />
            {sublabel && <label className="text-gray-400 text-xs">{sublabel}</label>}
        </div>
    );
}