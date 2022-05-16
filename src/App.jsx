import { React, useState } from 'react';
import { ChakraProvider, theme, Text, Container } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import SearchInput from './components/SearchInput';
import ButtonGroup from './components/ButtonGroup';
import GroupViewer from './components/GroupViewer';
import { client } from './services/countries';

function App() {
  const [selectedOption, setSelectedOption] = useState('continent');
  const [input, setInput] = useState('');

  const options = [
    { value: 'continent', color: 'blue' },
    { value: 'language', color: 'orange' },
  ];

  const onClickOption = (option) => setSelectedOption(option);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Container>
          <Text>Country Search</Text>
          <SearchInput setInput={setInput} input={input} />
          <ButtonGroup
            options={options}
            selectedOption={selectedOption}
            onClick={onClickOption}
          />
          <GroupViewer search={input} group={selectedOption} />
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
