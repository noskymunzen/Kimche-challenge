import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const SearchInput = (props) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
      <Input
        onChange={(e) => props.setInput(e.target.value)}
        value={props.input}
        type="text"
      />
    </InputGroup>
  );
};

export default SearchInput;
