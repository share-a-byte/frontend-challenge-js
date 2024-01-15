
import * as Styled from './styles'

const Flex = ({
    flexDirection,
    justifyContent,
    alignItems,
    children,
    ...props
})=>{
    return <Styled.FlexDiv $flexDirection={flexDirection} $justifyContent={justifyContent} $alignItems={alignItems} {...props}>
{children}
    </Styled.FlexDiv>

}

export default Flex