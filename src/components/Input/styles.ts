import styled from 'styled-components';

export const Input = styled.input`
  width: min(90vw, 30rem);
  border: ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.text};
  height: 3.375rem;
  border-radius: 3px;
  padding: 0 2rem;
  font-size:0.94rem;
  outline: none;
  background: ${(props) => props.theme.colors.el}
`;
