import styled from 'styled-components'

export const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  border: none;
  font-size: large;
  font-weight: 400;
  padding: 8px 16px;
  cursor: pointer;
`