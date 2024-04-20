import {FC, useEffect, useState} from "react";

interface PColorWidget {
    colorInput: string;
}

export const ColorWidget: FC<PColorWidget> = (props) => {
    const [history, setHistory] = useState<string[]>([]);

    const checkColor = (color: string): boolean => {

    }

    useEffect(function() {
      console.log("Změna props")
      console.log(props.colorInput);
    }, [props.colorInput]);

    return (
        <div className="flex flex-col items-center gap-16">
            <div className={`h-24 w-24`} style={{backgroundColor: props.colorInput}} />
            <div className="flex flex-row gap-12">
                {
                    history.map(function (value, index) {
                        return <div className="h-16 w-16" style={{backgroundColor: value}} key={index}/>
                    })
                }
            </div>
        </div>
    )
}