import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from "./Modal";
import { Button } from "../Button/Button";

interface ModalExampleProps {
    message: string;
    status: "success" | "error" | "warning";
    heading?: string;
    confirmText?: string;
    action: () => void;
}

function ModalExample({ message, status, heading, confirmText, action }: ModalExampleProps) {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Button primary={true} onClick={() => setShow(true)}>Show Modal</Button>
            <Modal
                message={message}
                status={status}
                heading={heading}
                confirmText={confirmText}
                show={show}
                setShow={setShow}
                action={action}
            />
        </>
    );
}

export default {
    title: 'Forms/Modal',
    component: ModalExample,
    argTypes: {
        message: { control: 'text' },
        status: { control: { type: 'select', options: ['success', 'error', 'warning'] } },
        heading: { control: 'text' },
        confirmText: { control: 'text' },
        action: { action: 'clicked' }
    },
} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof ModalExample> = (args) => <ModalExample {...args} />;
export const Default = Template.bind({});

Default.args = {
    message: "I am a modal",
    status: "success",
    action: () => console.log("action"),
};