import SearchBar from "./_components/SearchBar";
import CategoriasScroll from "./_components/CategoriasScroll";
import Image from "next/image";
import Link from "next/link";
import HeaderActions from "./_components/HeaderActions";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function ExploraPage() {
  const productosEnOferta = [
    {
      id: 1,
      name: "Pétalos de rosa (Rojo)",
      image:
        "https://img2.elyerromenu.com/images/eros-pasion/petalos-de-rosa-rojo/img-s.webp",
      offer: { discount: 0.14, expires: "2026-11-08" },
      owner: {
        id: 101,
        name: "Eros & Pasion",
        avatar: "https://img2.elyerromenu.com/images/eros-pasion/logo/img.webp", // Logo extraído del contexto
        verified: true,
      },
    },
    {
      id: 2,
      name: "Paquete de 5 velas en forma de corazón",
      image:
        "https://img2.elyerromenu.com/images/eros-pasion/paquete-de-5-velas-en-forma-de-corazon-v/img-s.webp",
      offer: { discount: 0.2, expires: "2026-11-15" },
      owner: {
        id: 101,
        name: "Eros & Pasion",
        avatar: "https://img2.elyerromenu.com/images/eros-pasion/logo/img.webp",
        verified: true,
      },
    },
    {
      id: 3,
      name: "Picadillo de Pollo 1 kg",
      image:
        "https://img2.elyerromenu.com/images/mercadito-hakuna-matata/picadillo-de-pollo-mdm-1-kg-xyo/img-s.webp",
      offer: { discount: 0.1, expires: "2026-11-10" },
      owner: {
        id: 102,
        name: "Mercadito Hakuna Matata",
        avatar:
          "https://img2.elyerromenu.com/images/mercadito-hakuna-matata/logo/img.webp",
        verified: true,
      },
    },
    {
      id: 4,
      name: "Galletas Soda Crokantina",
      image:
        "https://img2.elyerromenu.com/images/mercadito-hakuna-matata/galletas-kl-tcp/img-s.webp",
      offer: { discount: 0.25, expires: "2026-11-20" },
      owner: {
        id: 102,
        name: "Mercadito Hakuna Matata",
        avatar:
          "https://img2.elyerromenu.com/images/mercadito-hakuna-matata/logo/img.webp",
        verified: true,
      },
    },
    {
      id: 5,
      name: "Ventilador recargable F6",
      image:
        "https://img2.elyerromenu.com/images/suenos-cumplidos-lia-nolmis/ventilador-recargables-f6/img.webp",
      offer: { discount: 0.18, expires: "2026-11-12" },
      owner: {
        id: 103,
        name: "Sueños Cumplidos Lia Nolmis",
        avatar:
          "https://img2.elyerromenu.com/images/suenos-cumplidos-lia-nolmis/logo/img.webp", // Placeholder si no hay logo específico visible
        verified: false,
      },
    },
    {
      id: 6,
      name: "Cobertura oscura para repostería 4 kg",
      image:
        "https://img2.elyerromenu.com/images/chocolatera-castillo/cobertura-oscura-para-reposteria-c6d/img-s.webp",
      offer: { discount: 0.12, expires: "2026-11-18" },
      owner: {
        id: 104,
        name: "Chocolatera Castillo",
        avatar:
          "https://img2.elyerromenu.com/images/chocolatera-castillo/logo/img.webp",
        verified: true,
      },
    },
    {
      id: 7,
      name: "Yogurt Probiótico Natural 1L",
      image:
        "https://img1.elyerromenu.com/images/finca-los-moros/yogurt-probiotico-natural-1l-r/img-s.webp",
      offer: { discount: 0.15, expires: "2026-11-25" },
      owner: {
        id: 105,
        name: "Finca Los Moros",
        avatar:
          "https://img1.elyerromenu.com/images/finca-los-moros/logo/img.webp",
        verified: true,
      },
    },
    {
      id: 8,
      name: "Jamón Criollo de Cerdo (1.0Lb)",
      image:
        "https://img2.elyerromenu.com/images/your-store/jamon-criollo-de-cerdo-1-0lb-g/img-s.webp",
      offer: { discount: 0.22, expires: "2026-11-14" },
      owner: {
        id: 106,
        name: "Your Store",
        avatar: "https://img2.elyerromenu.com/images/your-store/logo/img.webp",
        verified: false,
      },
    },
    {
      id: 9,
      name: "Ruedas de Pescado de mar (3.0Lb)",
      image:
        "https://img2.elyerromenu.com/images/your-store/ruedas-de-pescado-pargo-3-0lb-a/img-s.webp",
      owner: {
        id: 106,
        name: "Your Store",
        avatar: "https://img2.elyerromenu.com/images/your-store/logo/img.webp",
        verified: false,
      },
    },
    {
      id: 10,
      name: "Arroz Importado (1.0Lb)",
      image:
        "https://img2.elyerromenu.com/images/your-store/arroz-importado-1-0lb-3/img-s.webp",
      owner: {
        id: 106,
        name: "Your Store",
        avatar: "https://img2.elyerromenu.com/images/your-store/logo/img.webp",
        verified: false,
      },
    },
  ].slice(0, 9);

  return (
    <div className="size-full flex flex-col gap-3 py-5 dark:bg-neutral-900 light:bg-white">
      <header className="space-y-5 items-center w-full overflow-hidden mb-1">
        <div className="flex items-end justify-between w-full">
          <Link href="/explora" className="block">
            <div className="flex items-center gap-3">
              <Image
                src="/images/categorias/academia.webp"
                alt="foto"
                height={40}
                width={40}
                className="inline-block bg-neutral-400 size-12 rounded-full"
              />

              <div className="text-left w-full -space-y-0.5">
                <p className="text-2xl font-montserrat font-semibold leading-tight">
                  Cuba<span className="text-primary ">seller</span>
                </p>
                <p className="text-xs dark:text-neutral-300 light:text-neutral-500 font-montserrat">
                  Encuentra tus clientes ideales.
                </p>
              </div>
            </div>
          </Link>

          <HeaderActions />
        </div>

        <SearchBar />
      </header>

      <CategoriasScroll />

      <section className="w-full mt-5 mb-2">
        <p className="font-montserrat flex flex-col text-sm">
          Nuevas <span className="text-lg font-semibold">Ofertas</span>
        </p>
        <div className="grid grid-cols-3 gap-4 mt-3">
          {productosEnOferta.map((product) => {
            return (
              <div
                key={product.id}
                className="relative size-full rounded-xl h-fit group cursor-pointer group hover:bg-white/6 active:bg-white/3"
              >
                {product.offer && (
                  <div className="absolute z-2 top-0 right-3 flex flex-col items-center">
                    <div className="bg-red-600 shadow-lg p-2 rounded-b-md">
                      <p className="font-bold text-center text-white text-lg leading-none">
                        {Math.floor(product.offer.discount * 100)}%
                      </p>
                      <p className="text-[10px] font-semibold text-center text-white/90 leading-none mt-0.5">
                        MENOS
                      </p>
                    </div>
                    <div className="w-0 h-0 border-l-16 border-l-transparent border-r-16 border-r-transparent border-t-12 border-t-red-600" />
                  </div>
                )}

                <div className="bg-white overflow-hidden rounded-xl border-2 border-neutral-600">
                  <img
                    src={product.image}
                    alt="product image"
                    width={400}
                    height={400}
                    className="w-full scale-101 h-50 object-cover object-center group-hover:scale-105 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-0.5 justify-center group- p-3">
                  <p className="text-neutral-100 text-sm line-clamp-2 font-msontserrat">
                    {product.name}
                  </p>

                  <p className="flex items-center gap-1 text-neutral-300 text-xs line-clamp-2">
                    {product.owner.verified && (
                      <RiVerifiedBadgeFill size={15} className="text-primary" />
                    )}
                    {product.owner.name}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="col-span-2 size-full"></div>
    </div>
  );
}
