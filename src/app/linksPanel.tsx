'use client'
import {FC, useState} from "react";

export const LinksPanel: FC = () => {
    const [menuHidden,setMenuHidden] = useState(true)
    return (
        <div className="mt-[320px]">
            <div className="flex flex-row justify-center">
                <h2 className="text-5xl font-medium">Color shower</h2>
            </div>

            <div className="mt-[80px] flex flex-row justify-center space-x-[550px]">
                <input className="border-2 border-black h-16 w-[450px]"></input>
                <button className="bg-green-300 h-16 w-32 rounded-lg">Show</button>
            </div>

            <div className="flex flex-row justify-center mt-[60px]">
                <div className="h-24 w-24 bg-orange-400"></div>
            </div>

            <div className="flex flex-row justify-center space-x-14 mt-[60px]">
                <div className="bg-red-600 w-16 h-16"></div>
                <div className="bg-gray-300 w-16 h-16"></div>
                <div className="bg-blue-400 w-16 h-16"></div>
            </div>
        </div>
    );
}