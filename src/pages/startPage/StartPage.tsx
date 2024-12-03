import { useState } from "react";
import pageStyles from "../pageStyles.module.css";
import LoginForm from "../../components/Forms/loginForm/LoginForm";
import RegisterForm from "../../components/Forms/registerForm/RegisterForm";

const StartPage = () => {
    const [selectedForm, setSelectedForm] = useState(null);

    const handleSelectForm = (form: any) => {
        setSelectedForm(form);
    }

    const handleBack = () => {
        setSelectedForm(null)
    }
  return (
    <section className={pageStyles.container}>
        {selectedForm === null ? (
            <div>
              <h1>Welcome to CV app</h1>
              <b>You will need have an account to access features of application</b>
              <p>Please pick an option:</p>
              <div className={pageStyles.redirectBtn}>
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