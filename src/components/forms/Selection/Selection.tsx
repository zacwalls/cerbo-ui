import React from 'react';

import { FieldWithLabel } from '../FieldWithLabel/FieldWithLabel';
import { filterProps } from '../../../utils/Components';

interface SelectionProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelPosition?: 'top' | 'left' | 'right' | 'bottom';
    type: 'checkbox' | 'radio';
}

export function Selection({ label, labelPosition = 'right', type, ...props }: SelectionProps) {
    return (
        <FieldWithLabel label={label} labelPosition={labelPosition}>
            <input
                type={type}
                {...filterProps(props, ['label', 'labelPosition', 'type'])}
            />
        </FieldWithLabel>
    );
}