import styled, {css} from "styled-components";

interface TypeProps{
  nextStepActive: boolean
}

export const Container = styled.div<TypeProps>`
  
  margin: 1.5em 0;
  
  
  a{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 0 1.5em;

    ${props => props.nextStepActive && css`
      pointer-events: none;
    `}


    @media (max-width: 524px) {
      flex-direction: column;
      gap: 0.5em;
    }

  }

`

export const Info = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
export const Title = styled.h2`

text-align: right;
font-size: 16px;
color: ${({theme}) => theme.colors.font_color_primary };
font-weight: bold;
margin-bottom: 0.5em;
`
export const Description = styled.p`
text-align: right;
font-size: 13px;
color: ${({theme}) => theme.colors.font_color_secundary };
`
export const Icon = styled.div<{active: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.active? ({theme}) => theme.colors.border_color_secudary  : ({theme}) => theme.colors.icon_color };

`
export const Point = styled.div<{active: boolean}>`
  position: absolute;
  right: -20px;

  width: 10px;
  height: 10px;
  border: 3px solid ${({theme}) => theme.colors.icon_color };
  border-radius: 50%;

  background:${props => props.active? ({theme}) => theme.colors.border_color_secudary  : ({theme}) => theme.colors.icon_color } ;

  @media ( max-width: 700px ) {
    bottom: -80%;
    right: 20px;
  }

  @media (max-width: 523px) {
    bottom: -42%;
    right: 45%;
      
    }

`