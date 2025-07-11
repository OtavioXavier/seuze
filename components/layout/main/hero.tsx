import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div
            className="bg-[url('/hero.jpg')] bg-cover bg-center h-96 rounded-2xl p-14"
        >
            <h1 className="text-white text-4xl font-bold max-w-80">Trazendo as Lojas até a sua casa</h1>
            <p className="text-white mt-4 max-w-80 text-sm">
                Descubra uma variedade de produtos de qualidade e receba tudo no conforto da sua casa. Compre fácil, rápido e seguro!
            </p>
            <Button className="bg-emerald-50 text-emerald-950 hover:bg-emerald-950 hover:text-emerald-50 cursor-pointer mt-4 h-12 w-36">Ver Produtos</Button>
        </div>
    );
}
