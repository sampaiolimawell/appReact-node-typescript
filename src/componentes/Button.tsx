//Utilizo a extensão nbc pra importar ja o codigo do native base, renomeio o parametro Button pra não conflitar,
//importo o IButton propriets e o Headding
import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

//criando tipo de botão e dizendo que os props (adereços são dos tipos que criei + do IButtonProps do native base)
type props = IButtonProps & {
  title: string;
};

//passo no parametro o title criado (propriedade)
export function Button({ title, ...rest }: props) {
  return (
    <ButtonNativeBase 
    bg="green.700"
    h={14}
    fontSize="sm"
    rounded="sm"
    _pressed={{bg: "green.500"}}
    {...rest}>
      <Heading
      color="white" 
      fontSize="sm"
      
      >{title}</Heading>
    </ButtonNativeBase>
  );
}
