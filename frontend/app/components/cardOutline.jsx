'use client';

import React from "react";

export default function GradientOutline({ bg = 'lefter', px = 16, py = 16, children }) {
    {/* 
        Este componente, cardOutline, siempre se tiene que usar envuelto por un div
        que decide el tamaño y puede recibir tres valores: px, py, bg
        1. px: padding horizontal, se debe ingresar el número en string, ej.: '12'
        2. py: padding vertical
        3. bg: se puede ingresar "url('/imagen.jpg')" (tiene que estar el archivo en carpeta public), 
        o se puede ingresar un color (solo acepta colores de tailwind o los nuestros)
    */}

    let bgImg = `bg-[${bg}] bg-cover bg-center`;
    let bgColor = `bg-${bg}`;
    let bgClasses = bg.includes('url') ? bgImg : bgColor;

    return <>
        <div className={`w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-b from-white/30 to-white/10 p-[1px] shadow-custom-vertical `}>
            <div className={`flex items-center justify-center w-full h-full rounded-lg ${bg.includes('url') ? '' : bgColor}`}
                style={{
                    backgroundImage: `${bg.includes('url') ? bg : ''}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className={`relative flex items-center justify-center w-full h-full rounded-lg backdrop-blur-[2px] ${bg.includes('url') ? 'bg-black/50' : ''}`}
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