import React from "react";
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import ListItem from '@tiptap/extension-list-item';
import TextStyle, { TextStyleOptions } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';

import { Button } from "../Button/Button";
import { Icon } from "../../icons/Icon/Icon";
import './RichText.styles.css';

interface IRichText {
    value?: string;
    onChange?: (editorHTML: string) => void;
    editing?: boolean;
}

interface IToolbarButton {
    editor: Editor;
    name: string;
    icon: string;
    action: () => void;
}


function ToolbarButton({ editor, name, icon, action }: IToolbarButton) {
    if (!editor) {
        return null;
    }

    return (
        <Button onMouseDown={action}>
            <span className={`flex items-center ${editor.isActive(name) ? 'text-cyan-500' : ''}`}>
                <Icon name={icon} size="20" />
            </span>
        </Button>
    );
}

function Toolbar({ editor }: { editor: Editor }) {
    if (!editor) {
        return null;
    }

    const buttons = [
        {
            name: 'bold',
            icon: 'AiOutlineBold',
            action: () => editor.chain().focus().toggleBold().run(),
        },
        {
            name: 'italic',
            icon: 'AiOutlineItalic',
            action: () => editor.chain().focus().toggleItalic().run(),
        },
        {
            name: 'underline',
            icon: 'AiOutlineUnderline',
            action: () => editor.chain().focus().toggleUnderline().run(),
        },
        {
            name: 'bulletList',
            icon: 'AiOutlineUnorderedList',
            action: () => editor.chain().focus().toggleBulletList().run(),
        },
        {
            name: 'orderedList',
            icon: 'AiOutlineOrderedList',
            action: () => editor.chain().focus().toggleOrderedList().run(),
        }
    ]

    return (
        <div className="flex flex-row justify-start items-center border-b shadow-sm">
            {buttons.map((button, index) => (
                <ToolbarButton key={index} editor={editor} {...button} />
            ))}
        </div>
    );
}

export function RichText({ value = '', onChange, editing }: IRichText) {
    const editor = useEditor({
        extensions: [
            Underline,
            TextStyle.configure({ types: [ListItem.name] } as Partial<TextStyleOptions>),
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
        ],
        content: value,
        onUpdate: ({ editor }) => {
            if (onChange) {
                onChange(editor.getHTML());
            }
        }
    });

    React.useEffect(() => {
        if (editor && editing !== undefined) {
            editor.setEditable(editing);
        }
    }, [editing])

    return (
        <div className={editing ? "border rounded editing" : ''}>
            {editing &&
                <Toolbar editor={editor as Editor} />
            }
            <EditorContent editor={editor} />
        </div>
    )
}