import React from "react";

import { Button } from "../Button/Button";
import { Icon } from "../../icons/Icon/Icon";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    message: string;
    status: "success" | "error" | "warning";
    heading?: string;
    confirmText?: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    action: () => void;
}

const modalIcon = {
    success: (<>
        <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF" />
        <path d="M23.5 28L26.5 31L32.5 25M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z" stroke="#039855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="4" y="4" width="48" height="48" rx="24" stroke="#ECFDF3" stroke-width="8" />
    </>
    ),
    warning: (<>
        <rect x="4" y="4" width="48" height="48" rx="24" fill="#FEF0C7" />
        <path d="M28 32V28M28 24H28.01M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z" stroke="#DC6803" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="4" y="4" width="48" height="48" rx="24" stroke="#FFFAEB" stroke-width="8" />
    </>),
    error: "modal-error-icon",
};

export function Modal({ message, status, heading, confirmText, show, setShow, action }: ModalProps) {
    return (
        show ?
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative m-6 mx-auto w-[544px] h-[180px]">
                    <div className="border-0 p-6 rounded-lg shadow-lg relative flex flex-row w-full bg-white outline-none focus:outline-none">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {modalIcon[status]}
                        </svg>
                        <div className="flex flex-col w-full mt-3 ml-6">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl text-black text capitalize">
                                    {heading ? heading : status}
                                </h3>
                                <Button onClick={() => setShow(false)}>
                                    <Icon name="close" />
                                </Button>
                            </div>
                            <div className="relative flex-auto mb-9">
                                <p className="text-slate-500 py-2">
                                    {message}
                                </p>
                            </div>
                            <div className="flex items-center justify-end w-">
                                <Button
                                    border={true}
                                    onClick={() => setShow(false)}
                                >
                                    Close
                                </Button>
                                <div className="ml-3">
                                    <Button
                                        primary={true}
                                        onClick={() => {
                                            action();
                                            setShow(false);
                                        }}
                                    >
                                        {confirmText ? confirmText : "Confirm"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </> : null
    );
}