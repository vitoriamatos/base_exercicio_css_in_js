import { Title as StyleTitle } from './styles'

export type Props = {
  children: string
  color?: string
  fontSize?: number
}

const Title = (props: Props) => (
  <StyleTitle color={props.color} fontSize={props.fontSize}>
    {props.children}
  </StyleTitle>
)

export default Title
