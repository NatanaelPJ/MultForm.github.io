import {useEffect } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from "../../components/Theme"
import { Container, Divider } from "./styles"
import SelectOption from '../../components/SelectOption'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function FormStep1() {
  const navigate = useNavigate()
  const {state, dispatch} = useForm()

  
  

  useEffect(() => {
      if(state.name == ''){
        return navigate('/')
      }

      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
  }, [])



  function handleNextStep(){
    let checkEntry = state.level !== undefined

    if(checkEntry){
     return navigate('/step3')
    } 

    return toast.warning('Marque uma opção')
  }

  function setLevel(level: number){
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })

  }


  return (
    <>
      <Theme>
        <Container>
          <p>Passo {state.currentStep}/3</p>
          <h1>{state.name}, o que melhor descreve você?</h1>
          <p>Escolha a melhor opção que se aplica ao seu estado atual, profissionalmente.</p>

          <Divider />
        
          <SelectOption 
          title="Sou iniciante" 
          description="Comecei a programar a menos de 2 anos." 
          icon="🥳" 
          selected={state.level === 0} 
          onClick={() => setLevel(0)}
          />

          <SelectOption 
          title="Sou programador" 
          description="Já programo há dois anos ou mais." 
          icon="😎" 
          selected={state.level === 1} 
          onClick={() => setLevel(1)}
          />

          <Link to={'/'} className="backButton">Voltar</Link>
          <button onClick={handleNextStep}>Próximo</button>
            
          
        </Container> 
      </Theme>
    </>
  )
}
