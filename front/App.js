import Main from './src/components/Main/Main';
import AppLoading from "expo-app-loading"
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/createApolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthContext from './src/contexts/AuthContext';
import RepositoriesProvider from './src/contexts/RepositoriesContext';

const authStorage = new AuthStorage();


const client = createApolloClient(authStorage)


export default function App() {
  const [fontsLoaded] = useFonts({
        'PlusJakartaSans-Regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
        'PlusJakartaSans-Medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
        'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
        'PlusJakartaSans-SemiBold': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'PlusJakartaSans-Light': require('./assets/fonts/PlusJakartaSans-Light.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authStorage}>
        <RepositoriesProvider>
          <NativeRouter>
            <Main />
          </NativeRouter>
        </RepositoriesProvider>
      </AuthContext.Provider>
    <StatusBar style='auto'/>
    </ApolloProvider>
    </>
  );
  }
