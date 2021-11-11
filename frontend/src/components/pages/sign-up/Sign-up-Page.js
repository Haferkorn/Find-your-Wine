import {useState} from "react";
import styled from "styled-components/macro";
import {signUp} from "../../../utils/apiService/SignUpAPi";
import {useHistory} from "react-router-dom";

function SignUpPage(){
    const initialState = {
        username: '',
        password: '',
        confirm_password:"",
    }
    const history=useHistory()

    const [credentials, setCredentials] = useState(initialState)
    const [identicalPasswords,setIdenticalPasswords]=useState("initial")

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }
    const checkPasswords=()=>{
        if(credentials.password!==credentials.confirm_password){
            setIdenticalPasswords(false)
            return false
        }setIdenticalPasswords(true)
        return true
    }

    const handleSubmit = event => {
        event.preventDefault()
        if(checkPasswords()){
            signUp(credentials)
            history.push("/login")
        }
        else{setCredentials({...credentials,confirm_password:""})}


    }

    return(
        <PageLayout>
            <Textarea>
            <h2>Welcome at <strong>Find Your Wine</strong></h2>
            <p>If you haven't got an account yet. You can create one using the form below:</p>
            </Textarea>
            <Formarea>
        <Form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">
                Username
            </label>
            <InputField
                type="text"
                required
                value={credentials.username}
                name="username"
                id="username"
                onChange={handleChange}
            />
            </div>

            <PasswordInput colorValue={identicalPasswords}>
            <label htmlFor="password">
                Password </label>
            <InputField
                type="password"
                required
                value={credentials.password}
                name="password"
                id="password"
                onChange={handleChange}

            />
            </PasswordInput>
            <PasswordInput colorValue={identicalPasswords}>
            <label htmlFor="confirm_password">
                Password </label>
            <InputField
                type="password"
                required
                value={credentials.confirm_password}
                name="confirm_password"
                id="confirm_password"
                onChange={handleChange}
            />
            </PasswordInput>

            <Sign_inButton>Sign in</Sign_inButton>
        </Form>
            </Formarea>
    </PageLayout>
    )
}export default SignUpPage

const PageLayout=styled.div`
  padding: 10px;
  border-radius: 20px;
  margin: 20px;
`
const Textarea=styled.div`
text-align: center;
`
const Formarea=styled.div`
  margin: 20px;
  padding: 10px;
`
const InputField=styled.input`
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: #CCCCCC;
  background-color: #fffcf2;
  color: #000000;
  border-style: hidden;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(66,66,66,.75);
`


const Sign_inButton=styled.button`
  transition: all .2s ease-in-out;
  margin-bottom: 40px;
  margin-top: 30px;
  background: #8b2635;
  border-radius: 6px;
  border: 0 solid #0d1b2a;
  display: inline-block;
  cursor: pointer;
  color: #ffff;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  &:hover {
    background-color: #607466;
    color: #e6e1d6;
    transform: scale(1.1);
  }
    
`


const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  flex-direction: column;
`
const PasswordInput=styled.div`
  border-radius: 10px;
  background-color: ${props=>
          props.colorValue==="initial" ? "#fffcf2" :
                  props.colorValue==="correct"? "#A4D4B4": "#FCAA90"}
`