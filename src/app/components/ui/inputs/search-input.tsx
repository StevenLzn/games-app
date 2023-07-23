import { AiOutlineSearch } from "react-icons/ai";

export default function SearchInput({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineSearch className="text-gray-500" />
      </div>
      <input
        type="search"
        className="block w-full p-3 pl-10 text-sm text-gray-900 rounded-2xl border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-gray-500 focus:ring-0"
        {...props}
      />
    </div>
  );
}
