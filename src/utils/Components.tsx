import React from 'react';

export function filterProps(props: any, keys: string[]): React.PropsWithChildren<any> {
    return Object.fromEntries(
        Object
            .entries(props)
            .filter(([key]) => !keys.includes(key))
    );
}