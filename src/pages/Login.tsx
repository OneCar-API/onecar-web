
import backgroundCarImg from '../assets/images/backgroundImg.svg'
import logoImg from '../assets/images/logo.svg'

//import '../styles/login.scss';

export function Login(){
  return(
    <div>
      <aside>
      <img src={backgroundCarImg} alt = "Ilustração"/>        
      </aside>
      <main>
        <div className="main-content">
          <img src = {logoImg} alt="OneCar"/>
        </div>
        <div>
          <form>
            <input
            type = "text"
            placeholder= "Login"
            />
            <input
            type = "text"
            placeholder= "Senha"
            />
            <button type = "submit">
              Login
            </button>
              
          </form>
        </div>
      </main>


    </div>
  )
}