"use client";

import { motion, AnimatePresence } from "motion/react";
import { useModalsStore } from "../_stores/useModalsStore";
import { FaSearch } from "react-icons/fa";
import { Provincias } from "@/app/_config/constants";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function SearchModal() {
  const { searchModal, toggleSearchModal } = useModalsStore();

  return (
    <AnimatePresence>
      {searchModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={toggleSearchModal}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/80"
        >
          <motion.div
            key="search-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-180 bg-neutral-800 rounded-md p-4 shadow-2xl"
          >
            <div className="flex items-center gap-3 px-3 bg-neutral-700 rounded-md">
              <FaSearch className="text-neutral-400" />
              <input
                type="text"
                placeholder="Explora negocios cerca de tu zona..."
                autoFocus
                className="py-4 text-sm outline-0 size-full text-neutral-300"
              />
            </div>

            <div className="mt-7 p-2">
              <p className="font-montserrat text-base">Lugares:</p>
              <div className="grid grid-cols-2 mt-2">
                {Provincias.map((province) => {
                  return (
                    <Link
                      key={province.id}
                      href={`/z/${province.id}`}
                      className="flex items-center gap-2 hover:bg-white/4 active:bg-white/2 rounded-full p-2 cursor-pointer"
                    >
                      <div className="rounded-full border border-white/10 p-2">
                        <FaLocationDot size={20} />
                      </div>

                      <div>
                        <p className="text-xs text-neutral-400 italic">
                          Cubaseller en:
                        </p>
                        <p className="text-sm text-neutral-200 font-semibold">
                          {province.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
