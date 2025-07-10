"use client"

import clsx from "clsx";
import { MinusCircle, Plus, PlusCircle } from "lucide-react";
import Image from "next/image"
import { useState } from "react";

interface ProductCardProps {
    title: string,
    weight: number,
    price: number,
    image: string
    className?: string
}



export default function ProductCard({ image, price, title, weight, className }: ProductCardProps) {
    const [quantity, setQuatity] = useState<number>(0);
    const [intPart, decimalPart] = price.toFixed(2).split(".");

    const handleAddProduct = () => {
        setQuatity(prev => prev + 1)
    }

    const handleMinusProduct = () => {
        setQuatity(prev => prev - 1)
    }

    return (
        <div className={clsx("bg-stone-100 w-64 h-[28rem] rounded-b-4xl flex flex-col p-2 selection:bg-emerald-500 shadow-xl", className)}>
            <div className="flex-1 flex flex-col items-center">
                <Image src={image} alt={title} width={200} height={200} draggable={false} className="selec-none"/>
                <h1 className="text-emerald-950 text-xl">{title}</h1>
                <p className="text-stone-400">{weight}g.</p>
                <h2 className="text-5xl font-bold text-emerald-950 mt-4">
                    {intPart}
                    <sup className="text-xl align-super">.{decimalPart}$</sup>
                </h2>
            </div>

            <button className={clsx("h-16 rounded-b-3xl w-full text-emerald-950 flex items-center transition-colors", quantity === 0 ? "bg-stone-300 cursor-pointer justify-center" : "bg-emerald-500")} onClick={quantity === 0 ? handleAddProduct : () => { }}>
                <div className={clsx(quantity === 0 ? "" : "hidden")} >
                    <Plus size={48} />
                </div>
                <div className={clsx(quantity === 0 ? "hidden" : "flex items-center w-full justify-around text-emerald-950")}>
                    <button onClick={handleAddProduct}>
                        <PlusCircle size={48} className="cursor-pointer" strokeWidth={1}/>
                    </button>
                    <b className="text-3xl">
                        {quantity}
                    </b>
                    <button onClick={handleMinusProduct} className="cursor-pointer">
                        <MinusCircle size={48} strokeWidth={1}/>
                    </button>
                </div>
            </button>
        </div>

    )
}