import SearchModal from "./_components/SearchModal";

export default function ExploraLayout(props: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="size-full max-h-dvh overflow-auto bg-neutral-900">
      <div className="max-w-180 mx-auto">
        {props.children}
        <SearchModal />
      </div>
    </div>
  );
}
