import * as Styled from './styles'


const Button = ({invert, children, onClick, ...props})=>{
    return<Styled.Button onClick={onClick} $invert={invert} {...props}>{children}</Styled.Button>
}

export default Button