//SingIn é a função que vou mostrar na interface. Realizo o import da view e do text do react-native, crio uma
//função com export para utilizar em outro file e nessa função é onde o retorno vai ser exatamente essa view e
//este texto
import { VStack, Heading, Icon, useTheme } from "native-base";

//Importa useState do react para captar os dados inputados e trata-los
import { useState } from "react";

//importar icones do phospho
import { Envelope, Key } from 'phosphor-react-native';

//import logo
import Logo from "../assets/logo_primary.svg";

//importo do file input
import { Input } from "../componentes/Input";

//importo o Button file
import { Button } from "../componentes/Button";

export function SignIn() {
  //useState retorna um array, declaro name estado para armazenar o nome e a função que atualiza setName, parametro 
  //inicial é uma string vazia ('')
  const [name, setName] = useState ( '' );

  //useState retorna um array, declaro name estado para armazenar o password e a função que atualiza setPassword, parametro 
  //inicial é uma string vazia ('')
  const [password, setPassword] = useState ( '' );
  
  const { colors  } = useTheme();

  //essa função pega os dados digitados atraves do onPress do botão, console log só pra exibir no console
  function handleSingIn(){
    console.log(name, password);
  }

  return (  
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

      <Logo />

      <Heading color={colors.gray[200]} fontSize="xl" mt={20} mb={6}>
        Acesse sua conta 
      </Heading>

      <Input 
      color={colors.gray[200]}
      placeholder="E-mail"
      mb={4}
      InputLeftElement={< Icon as={<Envelope color={colors.green[200]}/>}ml={4} />}
      //este setName atualiza conforme eu digito no input
      onChangeText={setName}
      />
      <Input 
      color={colors.gray[200]}
      placeholder="Senha"
      mb={8}
      InputLeftElement={< Icon as={<Key color={colors.green[200]}/>}ml={4} />}
      secureTextEntry 
      //este setPassword atualiza conforme eu digito no input
      onChangeText={setPassword}/>

      <Button 
      onPress={handleSingIn}
      title="Entrar"
      w="full"
      />
    </VStack>
  );
}
