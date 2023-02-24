import React from 'react';

export function filterProps(props: any, keys: string[]): React.PropsWithChildren<any> {
    return Object
        .entries(props)
        .filter(([key]) => !keys.includes(key))
        .map(([key, value]) => ({ [key]: value }));
}