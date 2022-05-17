import { React, useState } from 'react';
import { ChakraProvider, theme, Text, Box } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import SearchInput from './components/SearchInput';
import ButtonGroup from './components/ButtonGroup';
import GroupViewer from './components/GroupViewer';
import { client } from './services/countries';
import './index.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('continent');
  const [input, setInput] = useState('');

  /**
   * ButtonGroup options config
   *
   *@type Array<Record<string, string>>
   */
  const options = [
    { field: '⛰️ Continent', value: 'continent', color: 'pink.600' },
    { field: '💬 Language', value: 'language', color: 'purple.300' },
  ];

  const onClickOption = (option) => setSelectedOption(option);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Box px="200px">
          <Box mt="3">
            <Text textColor="white" fontSize="5xl">
              Country Search 🗺️
            </Text>
            <SearchInput setInput={setInput} input={input} />
            <ButtonGroup
              options={options}
              selectedOption={selectedOption}
              onClick={onClickOption}
            />
          </Box>
          <GroupViewer search={input} group={selectedOption} />
        </Box>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
