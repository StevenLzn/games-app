"use client";
import { InputContainer, Input, Icon } from "./SearchInputStyles";
import { AiOutlineSearch } from "react-icons/ai";

type SearchInputProps = {
  placeholder: string;
  value: string;
  width: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  width,
  onChange,
}) => {
  return (
    <InputContainer style={{ width: width }}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Icon>
        <AiOutlineSearch />
      </Icon>
    </InputContainer>
  );
};

export default SearchInput;
