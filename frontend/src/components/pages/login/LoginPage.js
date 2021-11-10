import {useContext, useState} from 'react'
import {AuthContext} from "../../../utils/apiService/AuthProvider";
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";


const initialState = {
    username: '',
    password: '',
}

function LoginPage() {
    const [credentials, setCredentials] = useState(initialState)
    const {login} = useContext(AuthContext)
    const history=useHistory()

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(credentials)
    }

    const redirectToSignUp=()=>{
        history.push("/sign-up")
    }

    return (
        <div>
        <Form onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username
            </label>
            <input
                type="text"
                required
                value={credentials.username}
                name="username"
                id="username"
                onChange={handleChange}
            />

            <label htmlFor="password">
                Password </label>
            <input
                type="password"
                required
                value={credentials.password}
                name="password"
                id="password"
                onChange={handleChange}
            />

            <button>Sign in</button>
        </Form>
        <button onClick={redirectToSignUp}  >Sign up</button>
        </div>
    )
}export default LoginPage

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  flex-direction: column;
`