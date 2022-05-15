import { React } from 'react';
import { ChakraProvider, theme, Text, Container } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import SearchInput from './components/SearchInput';
import { client } from './services/countries';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Container>
          <Text>Country Search</Text>
          <SearchInput />
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
