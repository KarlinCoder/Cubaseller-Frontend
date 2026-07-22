import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-between w-full px-3 py-2 rounded-full shadow-2xl bg-neutral-800 cursor-pointer hover:opacity-90 active:opacity-85">
      <div className="flex items-center gap-3">
        <div className="relative size-9 rounded-full bg-neutral-600 overflow-hidden">
          <Image
            src="https://placehold.co/80x80"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-semibold text-base leading-tight">
            Negocios
          </span>
          <span className="text-neutral-200 text-xs leading-tight">
            BestoMenu
          </span>
        </div>
      </div>
      <div className="rounded-full p-3 grid place-items-center">
        <FaSearch className="text-neutral-400" size={20} />
      </div>
    </div>
  );
}
