import {useEffect, useState} from 'react'
import {Write} from "./Write";
import { count } from 'letter-count';
import {Credits} from "./Credits";
import * as React from "react";

function App() {

    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const doCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error("Could not copy to clipboard: " + error);
            console.log("Printing backup text");
            console.log(text);
        }
    }

    const doClear = () => {
        setText("");
    }

    const showAbout = (show: boolean) => {
        setIsOpen(show);
    }

    const doUpdate = (text: string) => {
        setText(text);
        setWordCount(count(text).words);
    }

    useEffect(() => {
        const text = localStorage.getItem('cachedText');
        if (text && text.length > 0) {
            setText(text);
        }

        const existingVisitor = localStorage.getItem('existingVisitor');
        if (!existingVisitor) {
            showAbout(true);
            localStorage.setItem('existingVisitor', 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cachedText', text);
    }, [text]);

    return (
        <div className="relative w-screen h-screen">
            {isOpen ? (
                <Credits hideModal={() => showAbout(false)}/>
            ): null}
            <div className="absolute w-full flex flex-row justify-between">
                <button className="p-8 transition ease-out text-white/0 hover:text-white/50 active:text-white/75" onClick={doCopy}>Copy</button>
                <button className="p-8 transition ease-out text-white/0 hover:text-white/50 active:text-white/75" onClick={doClear}>Clear</button>
            </div>
            <div className="w-screen h-screen bg-zinc-900 flex flex-col justify-center content-center">
              <Write text={text} setText={doUpdate}/>
            </div>
            <div className="bottom-0 absolute w-full flex flex-row justify-between">
                <button className="p-8 transition ease-out text-white/0 hover:text-white/50 active:text-white/75" onClick={_ => showAbout(true)}>Credits</button>
                <p className="p-8 select-none transition ease-out text-white/0 hover:text-white/50 active:text-white/75">Words: {wordCount}</p>
            </div>
        </div>
  )
}

export default App
