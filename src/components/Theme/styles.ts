import styled from "styled-components";



export const Container = styled.div`
  background: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.font_color_primary};
  min-height: 100vh;

`

export const Content = styled.div`
  
  margin: 0 auto;
  max-width: 1120px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`


export const Steps = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const Sidebar = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-right: 1px solid ${({theme}) => theme.colors.border_color_primary};

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
    border: 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.border_color_primary} ;
  }

  @media (max-width: 550px){
    justify-content: space-evenly;
  }
`

export const Page = styled.main`
  flex: 1;
  padding: 40px 0 0 40px;

`