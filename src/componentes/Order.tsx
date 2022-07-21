import { Box, HStack, Text, useTheme, VStack, Circle } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";

import {
  ClockAfternoon,
  Hourglass,
  CircleWavyCheck,
} from "phosphor-react-native";

//exporto para reaproveitar essa tipagem deste componente
export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
};

type props = {
  data: OrderProps;
};
export function Order({ data, ...rest }: props) {
  //importo o colors do useTheme para usar na consta statusColors
  const { colors } = useTheme();

  //importo o colors do native base pra usar no Box a baixo de forma condicional, ou seja, statusColor recebe o data.status que
  //por sua vez se for igual à 'open então? recebe a cor secondary senão: recebe green.300
  const statusColor =
    data.status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <HStack
      bg="gray.600"
      mb={4}
      alignItems="center"
      justifyContent={"space-between"}
      rounded="sm"
      overflow="hidden"
    >
      <Box h="full" w={2} bg={statusColor}></Box>

      {/* essa tras o numero do patrimonio */}
      <VStack flex={1} my={5} ml={5}>
        <Text color={"white"} fontSize="md">
          {" "}
          Patrimônio {data.patrimony}
        </Text>

        {/* essa tras a data */}
        <HStack alignItems="center">
          <ClockAfternoon size={15} color={colors.gray[300]} />
          <Text color={"gray.200"} fontSize="xs" ml={1}>
            {data.when}
          </Text>
        </HStack>
      </VStack>

        {/* aparece o icone do andamento ampulheta ou wavycheck */}
      <Circle bg={"gray.500"} h={12} w={12} mr={12}>
        {data.status === "closed" ? (
          <CircleWavyCheck size={24} color={statusColor} />
        ) : (
          <Hourglass size={24} color={statusColor} />
        )}
      </Circle>
    </HStack>
  );
}
