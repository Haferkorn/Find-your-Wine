import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Redirect, Route } from "react-router-dom"

export default function PrivateRoute(props) {
   const { token } = useContext(AuthContext)

   return token ? <Route {...props} /> : <Redirect to={"/login"} />
}
