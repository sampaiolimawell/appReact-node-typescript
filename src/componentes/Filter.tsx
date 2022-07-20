//importo ao filtro as propriedades e adereços que desejo ter no meu filtro atraves do native base
import { Text, Button, IButtonProps, useTheme } from 'native-base';
import colors from 'native-base/lib/typescript/theme/v33x-theme/base/colors';

//alem das propriedades do IButtonprops vou criar outras propriedades que desejo ter no meu filtro
//title = string, um booleano isActive e se está aberto ou fechado
type props = IButtonProps & {
    title: string;
    isActive?: boolean;
    type: 'open' | 'closed'
}
export function Filter({title, isActive = false, type, ...rest}: props) {

    //importo o colors do native base pra usar no Button a baixo de forma condicional
    const {colors} = useTheme();

    //importo o colors do native base pra usar no Button a baixo de forma condicional, ou seja, colorType recebe o type que 
    //por sua vez se for igual à 'open então? recebe a cor secondary senão: recebe green.300
    const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];
  return (
    <Button variant="outline"
    borderWidth={isActive? 1 : 0}
    borderColor={colorType}
    bgColor="gray.600"
    flex={1}
    size="sm"
    {...rest}
    
    >
            <Text color={isActive ? colorType : "gray.300"} fontSize="xs" textTransform={"upperCase"}>
               {title} 
            </Text>
    </Button>
  );
}