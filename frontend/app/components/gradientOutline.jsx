'use client';

import React from "react";

export default function GradientOutline({ bg = '#1C232B', px = 16, py = 16, blur = true, borderGradient = 'linear-gradient(to bottom, #FFFFFF4D, #FFFFFF0D)', children }) {
    {/* 
        Este componente, cardOutline, siempre se tiene que usar envuelto por un div
        que decide el tamaño y puede recibir tres valores: px, py, bg
        1. px: padding horizontal, se debe ingresar el número en string, ej.: '12'
        2. py: padding vertical
        3. bg: se puede ingresar "url('/imagen.jpg')" (tiene que estar el archivo en carpeta public), 
        o se puede ingresar un color (solo acepta colores de tailwind o los nuestros)
    */}

    let bgImg = `bg-[${bg}] bg-cover bg-center`;
    let bgImgStyle = `url('${bg}')`;
    let bgColor = `bg-${bg}`;

    return <>
        <div className={`w-full h-full p-[1px] rounded-lg flex items-center justify-center overflow-hidden shadow-custom-vertical`}
            style={{
                backgroundImage: borderGradient,
            }}>
            <div className={`flex items-center justify-center w-full h-full rounded-lg shadow-custom-inset-vertical`}
                style={bg.includes('/') ? 
                {
                    backgroundImage: bgImgStyle,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                } 
                : 
                {
                    background: bg,
                }
            }>
                <div className={`relative flex items-center justify-center w-full h-full rounded-lg transition-all ${ blur ? 'backdrop-blur-[8px]' : '' } ${bg.includes('/') ? 'bg-black/60 ' : ''}`}
                    style={{
                        paddingLeft: `${px}px`,
                        paddingRight: `${px}px`,
                        paddingTop: `${py}px`,
                        paddingBottom: `${py}px`
                    }}>
                    {children}
                </div>
            </div>
        </div>
    </>;
}