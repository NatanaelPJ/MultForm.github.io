import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5em;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.border_color_primary};


  h1{
    margin: 0;
    padding: 0;
  }

  p{
    margin-top: 1.2em;
    font-size: 18px;
    color: ${({theme}) => theme.colors.font_color_secundary};
  }
`