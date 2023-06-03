"use client";
import { NavbarContainer } from "./NavbarStyles";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import IconButton from "../../atoms/IconButton/IconButton";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  const handleOnChange = () => {
    console.log("change!");
  };

  const handleClick = () => {
    console.log("click!");
  };

  return (
    <NavbarContainer>
      <SearchInput
        placeholder="Buscar un juego"
        value=""
        onChange={handleOnChange}
        width="30%"
      ></SearchInput>
    </NavbarContainer>
  );
};

export default Navbar;
