
//importo para que o filtro se comporte visualmente em tempo real nma interface, por isso usar estados
import { useState } from 'react'

//Importa HStack do native em nossa view, IconButton, VStack, flatList e useTheme
import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
  FlatList
} from "native-base";

import React from "react";

//importo o logo dos assets
import Logo from "../assets/logo_secondary.svg";

//Importo o Icone SignOut do phospho e passo no IconButton
import { SignOut } from "phosphor-react-native";

//importo o filtro do arquivo Filter
import { Filter } from "../componentes/Filter";


//importo o Orders e substituo pelo texto redenrizado em FlatList RenderItem
import { Order, OrderProps } from '../componentes/Order';

export function Home() {
  //crio a função com o satatusSelected com a função que vai atualizar o status ' setStatusSelected, digo que começa com 
  //open selecionado e entre menor e maior "<>" digo se é open ou| é closed. Isso vai no filter open
  const [satatusSelected, setStatusSelected] = useState <'open' | 'closed'>('open');

  //criando novo estado para as listas de solicitações. useState([]) = VETOR VAZIO, porém vou por um para ter de exemplo
  //E digo que este estado é do tipo OrderProps só que lista. por isso em vetor "[]"
  const [orders, setOrders] = useState<OrderProps[]>([{
    id: '123',
    patrimony: '4673617',
    when: '21/07/2022 às 10:00', 
    status: 'open',
  }])

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
          {/* {() => setStatusSelected('open')} /> <= essa função recebe parametro por isso essa identação */}
          <Filter
          title={"Em andamento"} 
          type={"open"} onPress={() => setStatusSelected('open')}
          isActive={satatusSelected === 'open'} />

          <Filter 
          title={"Finalizados"} 
          type={"closed"} onPress={() => setStatusSelected('closed')}
          isActive={satatusSelected === 'closed'}/>
        </HStack>

        <FlatList data={orders}
        // a flatList precisa do keyExtractor e do renderItem, para usar o item.patrimony no render eu preciso desfragmentar
        //({item}) <= passando-o assim, depois boto dentro de um Text e chamo o item.patrimony =><Text color={'white'}>{item.patrimony}</Text> por enquanto
        //agora que criei o componente orders eu chamo em renderItem no lugar do Text anterior
        keyExtractor={item=> item.id} 
        renderItem={({item}) => <Order data={item}/>} 
        />

        
        
      </VStack>
    </VStack>
  );
}
