import Logo from "@/components/commom/logo";
import Ad from "@/components/layout/header/ad";
import AvatarMenu from "@/components/layout/header/avatar-menu";
import Cart from "@/components/layout/header/cart";
import SearchBar from "@/components/layout/header/search-bar";
import CategoryCarousel from "@/components/layout/main/categories/category-carousel";
import Hero from "@/components/layout/main/hero";
import ProductCard from "@/components/layout/main/products/product-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] m-4 bg-stone-100">
      <header className="flex items-center justify-around bg-emerald-500 h-22 rounded-2xl mb-4">
        <Link href={"/"}>
          <Logo background />
        </Link>
        <SearchBar />
        <Ad />
        <Cart itens={2} />
        <AvatarMenu />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section className="flex justify-center p-4">
          <CategoryCarousel />
        </section>
        <ProductCard
          title="Café com Leite"
          weight={500}
          price={29.99}
          image="/cafe.png"
        />
      </main>
      <footer>
        Footer

      </footer>
    </div>
  );
}
