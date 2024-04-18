import React from "react";

export default function AboutCard(props) {

    return <>
        <div className="w-full h-fit max-w-[478px] text-white bg-white/5 rounded-md border border-white/15 backdrop-blur-md p-6 ">
            <div className="flex flex-col items-start gap-2">
                <h1 className=" text-base font-medium">
                    Sobre mi
                </h1>
                <p className=" text-sm font-light">
                    {props.description}
                </p>
                <button className=" text-sm underline font-thin">
                    Ver más
                </button>
            </div>
        </div>
    </>
}