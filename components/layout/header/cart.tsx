import clsx from "clsx";
import { ShoppingCart } from "lucide-react";

interface CartProps {
    clasName?: string;
    itens: number
}

export default function Cart({ clasName, itens }: CartProps) {
    return (
        <div className={clsx(clasName, "bg-white rounded-full w-10 h-10 flex items-center justify-center relative cursor-pointer")}>
            <span className="bg-orange-600 text-white absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full min-w-6 min-h-6 text-sm flex items-center justify-center">
                {itens.toString()}
            </span>
            <div className="text-emerald-500">
                <ShoppingCart />
            </div>
        </div>

    )
}