import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
      <Input type="text" />
    </InputGroup>
  );
};

export default SearchInput;
