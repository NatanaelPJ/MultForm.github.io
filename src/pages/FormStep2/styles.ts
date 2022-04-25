import styled from "styled-components";


export const Container = styled.div`
  p{
    margin: 1em 0;
    font-size: 18px;
    color: ${({theme}) => theme.colors.font_color_secundary } ;
  }
  
  h1{
    margin: 0;
    padding: 0;
    font-size: 30px;
  }

  label{
    padding: 1em 1em 1em 0 ;
    font-size: 18px; 
    display: flex;
    flex-direction: column;
    
    input{
      margin-top: 0.5em;
      width: 100%;
      padding: 1em 0.8em;

      font-size: 18px;
      color: ${({theme}) => theme.colors.font_color_primary};

      background: ${({theme})=> theme.colors.input_bg_primary };
      border-radius: 0.5em;
      border: 2px solid ${({theme}) => theme.colors.border_color_secudary };
    }
  }

  button{
    margin-top: 1em;
    background: ${({theme})=> theme.colors.btn_bg_primary};
    padding: 1.2em 2.2em;
    border: 0;
    border-radius: 2em;

    font-size: 20px;
    font-weight: bold;
    color: ${({theme})=> theme.colors.font_color_primary };
  }

  .backButton{
    font-size: 1em;
    color: ${({theme}) => theme.colors.font_color_secundary };
    text-decoration: none;
    padding: 1.2em 2.2em;
  }

`

export const Divider = styled.div`
  margin: 1em 0;
  border: 1px solid ${({theme}) => theme.colors.border_color_primary };
`
