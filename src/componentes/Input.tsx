//Cria nbc input, pra não conflitar nome do arquivo com o Input do native renomea com um as "Input as NativeBaseInput"
import { Input as NativeBaseInput, IInputProps } from "native-base";

//função para exportar o Input dos campos de login junto com as propriedades customizadas
//o parametro ...rest refere-se a tudo que eu desejo importar nos input tudo que não declarei aqui
//depois digo que tudo que for referente ao ...rest é do tipo IInputs do Native Base " Input({ ...rest } : IInputProps)"
export function Input({ ...rest } : IInputProps) {
  return <NativeBaseInput
  bg="gray.700"
  h={14}
  size="md"
  borderWidth={0}
  fontSize="md"
  fontFamily={"body"}
  color={"green"}
  placeholderTextColor="gray.300"
  _focus={{
    borderWidth: 1,
    borderColor: "green.500",
    bg: "gray.700"
  }}
  { ...rest }

  />;
}
