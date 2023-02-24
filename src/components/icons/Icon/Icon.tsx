import React from 'react';
import { Icons, IconNames } from '../Icons/Icons';

interface IconProps {
    title?: string;
    size?: '16' | '24' | '32' | '40';
    name: IconNames;
}

export function Icon({ title, size, name, ...props }: IconProps) {
    const pathSize = 24;

    if (!size) {
        size = '24';
    }

    const viewBox = `0 0 ${size} ${size}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            width={size}
            height={size}
            viewBox={viewBox}
            {...Object.entries(props).filter(([key]) => key !== 'size' && key !== 'name' && key !== 'title')}
        >
            {title &&
                <title>{title}</title>
            }
            <g transform={`scale(${parseInt(size) / pathSize})`}>
                {Icons[name]}
            </g>
        </svg>
    );
}