import styled from 'styled-components'

export type ButtonVarient = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  varient: ButtonVarient
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme['green-500']};
`
