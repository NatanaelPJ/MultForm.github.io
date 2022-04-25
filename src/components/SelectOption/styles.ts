import styled, {css} from "styled-components";

export const Container = styled.div<{ selected: boolean} >`
flex: 1;
  display: flex;
  align-items: center;
  gap: 0 1em;
  padding: 1.5em;

  border-radius: 1.2em;
  border: 1px solid ${props => props.selected? ({theme}) => theme.colors.border_color_secudary : ({theme}) => theme.colors.border_color_primary};

  & + &{
    margin-top: 1em;
  }

  &:hover{
    border: 1px solid ${({theme})=> theme.colors.border_color_secudary};
  }

  ${props => !props.selected && css`
  &:hover{
    border: 1px solid ${({theme}) => theme.colors.border_color_primary } ;
  }
  `  
  }

  cursor: pointer;
`
export const Icon = styled.div`
  background: #191A59;
  width: 60px;
  height: 60px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  border-radius: 50%;
`
export const Info = styled.div`
  flex: 1;
`
export const Title = styled.div`
  font: 22px bold;

`
export const Description = styled.div`
  margin-top: 0.6em;
  font-size: 18px;
  color: ${({theme}) => theme.colors.font_color_secundary };
`