import React from "react";

export function Label({ children, ...props }: React.PropsWithChildren<React.LabelHTMLAttributes<HTMLLabelElement>>) {
    return <label className="block text-gray-600 text-sm mb-2" {...props} >{children}</label>;
}