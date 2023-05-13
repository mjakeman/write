// @flow
import * as React from 'react';

type Props = {
    hideModal: () => void;
};

export function Credits({hideModal}: Props) {
    return (
        <div className="absolute w-screen h-screen z-50" onClick={_ => hideModal()}>
            <div className="w-full h-full flex flex-col align-center justify-center bg-zinc-900/75">

                <div className="animate-slide-in relative m-auto rounded-lg shadow-lg bg-zinc-700 text-white/75 p-4 max-w-lg w-2/3 h-auto" onClick={e => e.stopPropagation()}>
                    <button className="absolute top-0 right-0 p-2 m-2 rounded-full hover:bg-zinc-800 transition ease-out" onClick={_ => hideModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row content-center gap-2 justify-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </span>
                            <h1 className="text-2xl">Write</h1>
                        </div>

                        <div className="flex flex-col gap-2 p-4 text-lg my-8">
                            <p>Write better.</p>
                            <p>Focus on typing and not editing.</p>
                            <br className="mb-4"/>
                            <p>Move your mouse to one of the four corners to:</p>
                            <ul className="list-disc ml-8">
                                <li>Copy (top left)</li>
                                <li>Clear (top right)</li>
                                <li>Count Words (bottom right)</li>
                                <li>See this dialogue again (bottom left)</li>
                            </ul>
                        </div>

                        <p className="vertical text-center text-sm text-white/50">Made in NZ by <a href="https://mattjakeman.com/" className="underline">Matthew Jakeman</a></p>
                    </div>
                </div>
            </div>
            <img className="absolute bottom-0 left-0 max-w-xs opacity-50" src="/help.svg"/>
        </div>
    );
}