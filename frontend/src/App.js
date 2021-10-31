import "./App.css"
import { Route, Switch } from "react-router"
import styled from 'styled-components/macro'
import Header from "./components/header/Header"
import LoginPage from "./components/pages/LoginPage"
import Homepage from "./components/pages/Homepage"
import RecommendationForm from "./components/pages/RecommendationForm"



function App() {
   return (
      <PageLayout>
         <Header />
         <Switch>
            <Route path={'/login'}>
               <LoginPage/>
            </Route>
            <Route path="/" exact>
               <Homepage/>
            </Route>
            <Route path="/recommendations">
               <RecommendationForm/>
            </Route>
         </Switch>
      </PageLayout>
   )
}

export default App

const PageLayout=styled.div`

`