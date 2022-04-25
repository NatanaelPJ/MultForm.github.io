import {useNavigate, Link} from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from "../../components/Theme"
import { Container, Divider } from "./styles"
import { ChangeEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function FormStep3() {
  const navigate = useNavigate()
  const {state, dispatch} = useForm()
  

  useEffect(() => {
    if(state.name == ''){
      return navigate('/')
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }, [])

  function handleNextStep(e : any){
    e.preventDefault()
    
    if(state.email == '' && state.github == '' ){
      return toast.warning('Digite seu email e Github')
    } else if(state.email == ''){
      return toast.warning('Digite seu email')
    } else if(state.github == ''){
      return toast.warning('Digite seu Github')
    }

    navigate('/theEnd')
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>){
    const typeName = e.target.name as string & number
    const type = FormActions[typeName]
    dispatch({
      type,
      payload: e.target.value
    })
  }

  return (
    <>
      <Theme>
        <Container>
          <p>Passo {state.currentStep}/3</p>
          <h2>Legal {state.name}, onde te achamos?</h2>
          <p>Preencha com os seus contatos.</p>

         <Divider />

          <form onSubmit={handleNextStep} >
            <label>
              Qual seu email?
              <input type="email" name='setEmail' value={state.email} onChange={handleInputChange} autoFocus/>
            </label>

            <label>
              Qual seu Github?
              <input type="text" name='setGithub' value={state.github} onChange={handleInputChange} />
            </label>
          
          <Link to={'/step2'} className="backButton">Voltar</Link>
          <button type='submit'>Finalizar Cadastro</button>
          </form>
        </Container> 
      </Theme>
    </>
  )
}
