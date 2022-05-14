import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <div>
          <h2>
            My first Apollo app{' '}
            <span role="img" aria-label="Rocket">
              🚀
            </span>
          </h2>
        </div>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
