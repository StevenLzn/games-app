export default function Button({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="rounded-lg px-4 py-2 bg-gray-100 text-sm font-medium hover:bg-gray-200"
      {...props}
    />
  );
}
