"use client";

import { FaSearch } from "react-icons/fa";
import { useModalsStore } from "../_stores/useModalsStore";

export default function SearchBar() {
  const { toggleSearchModal } = useModalsStore();

  return (
    <>
      <div
        onClick={toggleSearchModal}
        className="w-full flex items-center gap-2 px-3 bg-neutral-800 rounded-full overflow-hidden hover:opacity-90 active:opacity-100 cursor-pointer"
      >
        <div className="border-2 border-white/10 bg-white/4 rounded-full p-2 shadow-2xl">
          <FaSearch className="block text-neutral-300" />
        </div>
        <p className="py-4.5 text-sm size-full text-neutral-400">
          Explora negocios cerca de tu zona...
        </p>
      </div>
    </>
  );
}
