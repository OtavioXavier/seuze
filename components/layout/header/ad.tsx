import { Timer } from "lucide-react";

export default function Ad() {
    return (
        <div className="flex items-center gap-2 text-white">
            <Timer color="#FFF"/>
            <p>Peça agora e receba em <b>30 minutos</b></p>
        </div>
    )
}