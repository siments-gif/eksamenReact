import { useState } from "react"
import LoginForm from "../../components/Forms/loginForm/LoginForm"
import RegisterForm from "../../components/Forms/registerForm/RegisterForm"

const StartPage = () => {
    const [selectedForm, setSelectedForm] = useState(null);

    const handleSelectForm = (form: any) => {
        setSelectedForm(form);
    }

    const handleBack = () => {
        setSelectedForm(null)
    }

  return (
    <section>
        {selectedForm === null ? (
            <div>
              <h1>Welcome to CV app</h1>
              <p>Please pick an option:</p>
              <div>
                <button onClick={() => handleSelectForm("login")}>Login</button>
                <button onClick={() => handleSelectForm("register")}>Register</button>
              </div>     
            </div>
        ): selectedForm === "login" ? (
            <div>
                <button onClick={handleBack}>Go back</button>
                <LoginForm />
            </div>
        ): (
            <div>
                <button onClick={handleBack}>Go back</button>
                <RegisterForm />
            </div>
        )}   
    </section>
        
  )
}

export default StartPage