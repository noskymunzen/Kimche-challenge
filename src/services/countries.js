import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

/**
 * client - create an instance with ApolloClient
 */
export const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

/**
 * GET_COUNTRIES -  query structure for countries resource
 * *@type <Record<string, string>>
 */
export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      native
      continent {
        name
        code
      }
      capital
      emoji
      languages {
        name
        code
      }
    }
  }
`;
