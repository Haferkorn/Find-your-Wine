import { useContext, useState } from "react"
import { AuthContext } from "../../../utils/AuthProvider"
import styled from "styled-components/macro"
import { useHistory } from "react-router-dom"
import {
   InputField,
   PageLayout,
   SignInButton,
   Textarea,
} from "../signUp/SignUpPage"

const initialState = {
   username: "",
   password: "",
}

function LoginPage() {
   const [credentials, setCredentials] = useState(initialState)
   const { login } = useContext(AuthContext)
   const history = useHistory()

   const handleChange = (event) => {
      setCredentials({
         ...credentials,
         [event.target.name]: event.target.value,
      })
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      login(credentials)
   }

   const redirectToSignUp = () => {
      history.push("/sign-up")
   }

   return (
      <PageLayout>
         <Textarea>
            <h2>
               Welcome back at <strong>Find Your Wine</strong>
            </h2>
            <p>Login to your account:</p>
         </Textarea>
         <Form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <InputField
               type="text"
               required
               value={credentials.username}
               name="username"
               id="username"
               onChange={handleChange}
            />

            <label htmlFor="password">Password </label>
            <InputField
               type="password"
               required
               value={credentials.password}
               name="password"
               id="password"
               onChange={handleChange}
            />

            <SignInButton>Sign in</SignInButton>
         </Form>
         <hr />
         <SignUpWrapper>
            <h3>You have no account yet? Sign-up</h3>
            <SignInButton onClick={redirectToSignUp}>Sign up</SignInButton>
         </SignUpWrapper>
      </PageLayout>
   )
}
export default LoginPage

const Form = styled.form`
   font-family: "Montserrat", sans-serif;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   gap: 15px;
   align-items: center;
   flex-direction: column;
`

const SignUpWrapper = styled.div`
   font-family: "Montserrat", sans-serif;
   text-align: center;
   justify-items: center;
`
