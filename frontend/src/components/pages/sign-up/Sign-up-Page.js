import {useState} from "react";
import styled from "styled-components/macro";
import {signUp} from "../../../utils/apiService/SignUpAPi";

function SignUpPage(){
    const initialState = {
        username: '',
        password: '',
    }

    const [credentials, setCredentials] = useState(initialState)

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        signUp(credentials)
    }

    return(
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
    )
}export default SignUpPage

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  flex-direction: column;
`