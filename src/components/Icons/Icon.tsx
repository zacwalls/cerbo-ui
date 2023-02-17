import React from "react";

import * as Icons from "./";

const icons = {
    'close': Icons.CloseIcon,
    'plus': Icons.PlusIcon,
    'save': Icons.SaveIcon,
    'trash': Icons.TrashIcon,
} as { [key: string]: JSX.Element };

export function Icon({ name }: { name: 'close' | 'plus' | 'save' | 'trash' }) {
    return icons[name];
}