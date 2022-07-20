//Importa VStack do native em nossa view, IconButton, VStack e useTheme
import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
} from "native-base";

import React from "react";

//importo o logo dos assets
import Logo from "../assets/logo_secondary.svg";

//Importo o Icone SignOut do phospho e passo no IconButton
import { SignOut } from "phosphor-react-native";

//importo o filtro do arquivo Filter
import { Filter } from "../componentes/Filter";

export function Home() {
  //uso as propriedade de color do native base para poder utilizar no IconButton "color={colors.green[300]}"
  const { colors } = useTheme();

  return (
    //VStack empilha os dados
    //HStack deixa um do lado do outro
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.green[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w={"full"}
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meus chamados</Heading>

          {/* A ideia aqui é mostrar o numero de solicitações */}
          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter title={"Em andamento"} type={"open"}  />

          <Filter title={"Finalizados"} type={"closed"} />
        </HStack>
      </VStack>
    </VStack>
  );
}
