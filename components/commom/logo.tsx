import clsx from "clsx";
import { Store } from "lucide-react";

interface LogoProps {
    className?: string;
    background?: boolean;
    onClick?: () => void;
}

export default function Logo({ className, background = false, onClick }: LogoProps) {
    return (
        <div className={clsx("flex items-center gap-2 cursor-pointer", className)} onClick={onClick}>
            <div className={clsx("w-10 h-10 flex items-center justify-center rounded-md", background ? "bg-white text-emerald-500" : "")}>
                <Store size={24} />
            </div>
            <h1 className="font-extrabold text-2xl text-white">Seu Zé</h1>
        </div>
    )
}