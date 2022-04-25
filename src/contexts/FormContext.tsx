//Context -> Armazena os dados; Reducer -> executa ações especificas; Provider -> Ambiente que dá acesso as dados do meu contexto; Hook
import {createContext, ReactNode, useContext, useReducer} from 'react'

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1 | undefined;
  email: string;
  github: string;
}

type Action= {
  type: FormActions | string;
  payload: any;
}


type ContexType = {
  state: State;
  dispatch: (action: Action) => void
}

type FormProviderProps = {
  children: ReactNode
}

const initialData: State = {
  currentStep: 0,
  name: '',
  level: undefined,
  email: '',
  github: '' 
}

//Context
const FormContext = createContext<ContexType | undefined>(undefined);

//Reducer
// state = receber os dados; action = que ação quero executar no dados;

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}

function formReducer (state: State, action: Action) {
  switch(action.type){
    case FormActions.setCurrentStep:
      return {...state, currentStep: action.payload}
    case FormActions.setName:
      return{...state, name: action.payload}
    case FormActions.setLevel:
      return {...state, level: action.payload}
    case FormActions.setEmail:
      return {...state, email: action.payload}
    case FormActions.setGithub:
      return {...state, github: action.payload}
    default:
      return state
  }
}

//Provider
export function FormProvider({children}: FormProviderProps){

//state -> meus dados;  dispatch -> função para executar as ações

  const [state, dispatch] = useReducer(formReducer, initialData )
  const value = {state, dispatch}

  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}


//Context Hook
export function useForm(){
  const context = useContext(FormContext)
  if(context === undefined){
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context;
}