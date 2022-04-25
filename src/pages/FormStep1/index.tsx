import {useNavigate} from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from "../../components/Theme"
import { Container, Divider } from "./styles"
import { ChangeEvent, useEffect } from 'react'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function FormStep2() {
  const navigate = useNavigate()
  const {state, dispatch} = useForm()


  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  function handleNextStep(){
    let checkEntry = state.name == ''
    

    if(checkEntry){
      return  toast.warning('Digite seu nome')
    }

    navigate('/step2')
    
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>){
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <>
      <Theme>
       
        <Container>
          <p>Passo {state.currentStep}/3</p>
          <h2>Vamos começar com seu nome</h2>
          <p>preencha o campo abaixo com seu nome completo.</p>

         <Divider />

          <label>
            Seu nome completo:
            <input type="text" value={state.name} onChange={handleInputChange} autoFocus/>
          </label>
          <button onClick={handleNextStep}>Próximo</button>
          
        </Container> 
      </Theme>
    </>
  )
}
