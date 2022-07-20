
//importo a view do file SignIn
//aqui inicia importando a SignIn até criar a Home.tsx. Depois de criar a Home.tsx substitui tudo que tem SignIn por Home
import { Home } from './src/screens/Home';

//importo native base
import { NativeBaseProvider, StatusBar } from 'native-base';

//importo o thema
import { THEME } from './src/styles/theme';

//importo as fontes google
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

//Importo o Loading
import { Loading } from './src/componentes/Loading';

//detalhe o "!" faz aparecer o loading no app
export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent/>
      { fontsLoaded ? <Home/> : <Loading/>}
    </NativeBaseProvider>
  );
}

