"use client";
import { Game, games } from "@/components/lib/games";
import SearchInput from "./ui/inputs/search-input";
import { useState } from "react";
import AutocompleteListLink from "./ui/lists/autocomplete-list-link";

export default function GameSearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [gamesList, setGamesList] = useState<Game[]>(games);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredGames = games.filter((game) => {
      const termLowerCase = event.target.value.toLowerCase();
      const titleLoweCase = game.title.toLowerCase();
      return titleLoweCase.includes(termLowerCase);
    });
    setGamesList(filteredGames);
  };

  const handleFocusInput = () => {
    setIsFocused(true);
  };

  const handleBlurInput = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 150);
  };

  return (
    <div className="w-5/6 sm:w-1/2 md:w-2/5 xl:w-1/4 mt-3 mx-auto relative">
      <SearchInput
        value={searchTerm}
        placeholder="Buscar un juego"
        onInput={handleSearchInput}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
      />
      <AutocompleteListLink showAutocompleteList={isFocused} list={gamesList} />
    </div>
  );
}
