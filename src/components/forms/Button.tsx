import React from 'react';

export function Button({ children, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
    return <button {...props} >{children}</button>;
}