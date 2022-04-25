import { ReactNode } from 'react'
import { useForm } from '../../contexts/FormContext'

import Header from '../Header'
import SidebarMain from '../SidebarMain'
import * as C from './styles'


type Props = {
  children: ReactNode
}

export function Theme({children} : Props){
  const {state} = useForm();

  return(
    <>
      <C.Container>
        <C.Content>
          <Header />
          <C.Steps>
            <C.Sidebar>
              <SidebarMain 
              title="Pessoal" 
              description="Se identifique" 
              icon="profile" 
              path="/"  
              active={state.currentStep === 1}
              nextStepActive={state.currentStep < 2} 
              />

              <SidebarMain 
              title="Profissional" 
              description="Seu Nivel" 
              icon="book" path="/step2"  
              active={state.currentStep === 2} 
              nextStepActive={state.currentStep < 2}
              />

              <SidebarMain title="Contatos" 
              description="Seus Contatos" 
              icon="mail" path="/step3"  
              active={state.currentStep === 3} 
              nextStepActive={state.currentStep < 3}
              />

            </C.Sidebar>
            <C.Page>
              {children}
            </C.Page>
          </C.Steps>
        </C.Content>
      </C.Container>
    </>
  )
}