"use client"
import {FC, useRef, useState} from "react";
import {ColorWidget} from "./ColorWidget";

const Page: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [color, setColor] = useState("");

    return (
        <div className="flex flex-col items-center gap-16 p-64">
            <h1 className="text-4xl">Color shower</h1>
            <div className="flex flex-row justify-between w-full">
                <input ref={inputRef} className="border border-black w-96 h-[4.875rem]"/>
                <button onClick={() => setColor(inputRef.current!.value)} className="p-6 bg-[#8EFF7B] rounded-xl text-2xl">Show</button>
            </div>
            <ColorWidget colorInput= {color} />
        </div>
    );
}

export default Page;