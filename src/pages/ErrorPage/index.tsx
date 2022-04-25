import {useNavigate} from 'react-router-dom'

export default function ErrorPage() {
  
  const navigate = useNavigate()
  setTimeout(() => navigate('/') , 6000);
 
  return(
    <>
    
        <div style={{margin: '0 auto', minHeight: '100vh' ,display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{maxWidth: '800px' , textAlign: 'center'}}>Page not found... você será redirecionado para o inicio do formulário.</h1>
        </div>

        
    </>
  )
}