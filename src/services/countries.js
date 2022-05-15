import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      native
      continent{
        name
        code
      }
      capital
      emoji
      languages{
        name
        code
      }
    }
  }
`;
