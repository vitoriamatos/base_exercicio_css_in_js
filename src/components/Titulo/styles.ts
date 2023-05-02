import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h3<Props>`
  color: ${(props) =>
    props.color === 'main' ? 'var(--cor-principal)' : 'var(--cor-secundaria)'};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'em' : '1.17em')};
`
