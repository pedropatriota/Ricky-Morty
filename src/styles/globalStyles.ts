import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  font-family:'Nunito Sans', sans-serif;
  font-size: clamp(1em, 1em + 1vw, 16px);
  --webkit-font-smoothing: antialiased;  
  background-color: ${({ theme }: any) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};

  @media(max-width: 768px){
    font-size: 14px;
  }

  @media(max-width: 400px){
    font-size: 12px;
  }
}
`;
