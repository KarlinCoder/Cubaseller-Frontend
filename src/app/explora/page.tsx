import SearchBar from "./_components/SearchBar";
import CategoriasScroll from "./_components/CategoriasScroll";

export default function ExploraPage() {
  return (
    <div className="size-full py-5 max-w-250 mx-auto min-h-dvh grid grid-cols-6 bg-neutral-900">
      <div className="col-span-4 flex flex-col gap-5 size-full">
        <SearchBar />

        <CategoriasScroll />
      </div>

      <div className="col-span-2 size-full"></div>
    </div>
  );
}
