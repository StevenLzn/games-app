import Image from "next/image";
import Link from "next/link";

type Item = {
  key: string;
  href: string;
  title: string;
  src: string;
  alt: string;
};

export default function LinkImageListItem({ ...props }: Item) {
  return (
    <Link
      className="hover:bg-gray-200 px-4 py-3 rounded-lg flex "
      key={props.key}
      href={`/${props.href}`}
    >
      <Image
        className="rounded"
        src={props.src}
        alt={props.alt}
        height={25}
        width={25}
      />
      <span className="ml-1">{props.title}</span>
    </Link>
  );
}
