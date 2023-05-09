// @flow
import * as React from 'react';
import {useEffect, useRef, useState} from "react";

type Props = {
    text: string;
    setText: (text: string) => void;
};

export function Write({text, setText}: Props) {
    const [noEditMode, setNoEditMode] = useState(false);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const reset = () => {
        if (textAreaRef.current) {
            textAreaRef.current.scrollTop = textAreaRef.current?.scrollHeight;
            textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd = textAreaRef.current.textLength
        }
    }

    useEffect(() => reset(), [text]);

    function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const newText = e.target.value;

        if (noEditMode) {
            if (newText.length <= text.length)
                setText(text);
            else if (!newText.startsWith(text))
                setText(text);
            else
                setText(e.target.value);
        } else {
            if (newText.length < text.length - 1)
                setText(text);
            else
                setText(e.target.value);
            return;
        }
    }

    function handleOnKeyDown(e: React.KeyboardEvent) {
        const textArea = textAreaRef.current!;
        const cursorPosition = textArea.selectionStart;

        if (e.key === 'ArrowUp' && cursorPosition === textArea.value.length) {
            e.preventDefault();
        }

        if (e.key === 'ArrowDown' && cursorPosition === textArea.value.length) {
            e.preventDefault();
        }

        reset();
    }

    return (
        <div className="relative">
            <div className="absolute p-8 w-screen bg-gradient-to-b from-zinc-900 to-transparent pointer-events-none"></div>
            <textarea className="font-serif overflow-hidden m-auto block text-lg leading-loose outline-none max-w-screen-md w-full h-64 p-16 resize-none bg-zinc-900 text-white/75"
                      placeholder="Start typing..."
                      value={text}
                      ref={textAreaRef}
                      onKeyDown={handleOnKeyDown}
                      onChange={handleOnChange}
            />
        </div>
    );
};