export default function BasicLoader() {
  return (
    <span className="absolute right-1/2 bottom-2/3 flex h-10 w-10 translate-x-1/2 translate-y-1/2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-10 w-10 bg-black"></span>
    </span>
  );
}
