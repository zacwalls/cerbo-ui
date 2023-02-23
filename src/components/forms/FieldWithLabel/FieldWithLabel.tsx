import React from "react";

interface FieldWithLabelProps extends React.PropsWithChildren<{ label?: string }> {
    label?: string;
    labelPosition?: "top" | "left" | "right" | "bottom";
}

export function FieldWithLabel({ children, label, labelPosition = "top" }: FieldWithLabelProps) {
    let labelMargin = "mb-2";
    let flexDirection: 'column' | 'row' | 'column-reverse' | 'row-reverse' = 'column';
    let alignItems: 'flex-start' | 'center' = 'flex-start';

    switch (labelPosition) {
        case 'top':
            flexDirection = 'column';
            labelMargin = 'mb-2';
            break;

        case 'bottom':
            flexDirection = 'column-reverse';
            labelMargin = 'mt-2';
            break;

        case 'right':
            flexDirection = 'row-reverse';
            alignItems = 'center';
            labelMargin = 'ml-2';
            break;

        case 'left':
            flexDirection = 'row';
            alignItems = 'center';
            labelMargin = 'mr-2';
            break;

        default:
            break;
    }

    return (
        <div className="flex w-fit" style={{ alignItems: alignItems, flexDirection: flexDirection }}>
            {label && <label className={`block text-gray-600 text-sm ${labelMargin}`}>{label}</label>}
            {children}
        </div>
    );
}