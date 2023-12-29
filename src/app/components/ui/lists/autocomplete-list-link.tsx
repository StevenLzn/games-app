import LinkImageListItem from "./list-item/link-image-list-item";

type AutocompleteListLinkProps = {
  showAutocompleteList: boolean;
  list: Item[];
};

type Item = {
  key: string;
  href: string;
  title: string;
  src: string;
  alt: string;
};

export default function AutocompleteListLink({
  ...props
}: AutocompleteListLinkProps) {
  return (
    <div>
      {props.showAutocompleteList && (
        <ul className="absolute top-full left-0 right-0 z-50 cursor-pointer mt-1 bg-gray-50 text-black rounded-lg shadow-lg animate-fadeInDownList">
          {props.list.length ? (
            props.list.map((item) => (
              <LinkImageListItem
                key={item.key}
                href={item.href}
                title={item.title}
                src={item.src}
                alt={item.alt}
              />
            ))
          ) : (
            <li className="hover:bg-gray-200 px-4 py-3 rounded-lg">
              No se encontraron coincidencias con el término buscado
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
