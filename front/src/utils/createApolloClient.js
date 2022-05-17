import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants from 'expo-constants';
import { relayStylePagination } from '@apollo/client/utilities';


const createApolloClient = (authStorage) => {

  const authLink = setContext(async (_, { headers }) => {
    try {
      const token = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null,
        }
      }
    } catch (e) {
      console.log(e)
      return {
        headers
      }
    }
  })
  
  const link = createHttpLink({
    uri: Constants.manifest.extra.APOLLO_URI,
  });

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          repositories: relayStylePagination(),
        }
      }
    }
  })

  const client = new ApolloClient({
      link: authLink.concat(link),
      cache,
  });

  return client 
};

export default createApolloClient;