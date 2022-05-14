import React from 'react';
import { ChakraProvider, theme, Text, Container } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SearchInput from './components/SearchInput';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

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
