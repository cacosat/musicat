'use client';

import React from "react";

export default function GradientOutline({ bg = 'custom-cards', px = 16, py = 16, children }) {
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
        <div className={`w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-b from-white/30 to-white/5 p-[1px] overflow-hidden shadow-custom-vertical`}>
            <div className={`flex items-center justify-center w-full h-full rounded-lg shadow-custom-inset-vertical ${bg.includes('/') ? '' : bgColor}`}
                style={{
                    backgroundImage: `${bg.includes('/') ? bgImgStyle : ''}`,
                    backgroundSize: `${bg.includes('/') ? 'cover' : ''}`,
                    backgroundPosition: `${bg.includes('/') ? 'center' : ''}`,
                }}>
                <div className={`relative flex items-center justify-center w-full h-full rounded-lg backdrop-blur-[8px] ${bg.includes('/') ? 'bg-black/60 ' : ''}`}
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