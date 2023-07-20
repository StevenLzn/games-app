export default function IconButton({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="rounded-lg px-3 py-3 bg-gray-100 text-xl font-medium hover:bg-gray-200"
      {...props}
    />
  );
}
