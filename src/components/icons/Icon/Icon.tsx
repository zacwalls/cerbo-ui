import React from 'react';
import loadable from "@loadable/component";
import { IconBaseProps, IconType } from "react-icons/lib";

interface IconProps extends IconBaseProps {
    name: string;
}

export function Icon({ name, ...props }: IconProps) {
    const lib = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(" ")[0].toLocaleLowerCase();
    const ElementIcon: IconType = loadable(() => import(`react-icons/${lib}/index.js`), {
        resolveComponent: (el: JSX.Element) => el[name as keyof JSX.Element]
    }) as IconType;

    return <ElementIcon {...props} />;
}