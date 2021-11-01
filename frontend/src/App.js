import "./App.css"
import { Route, Switch } from "react-router"
import styled from "styled-components/macro"
import Header from "./components/header/Header"
import LoginPage from "./components/pages/LoginPage"
import Homepage from "./components/pages/homepage/Homepage"
import RecommendationForm from "./components/pages/recommandationForm/RecommendationForm"
import Footer from "./components/footer/Footer"
import Recommendations from "./components/pages/recommandations/Recommendations";

function App() {
   return (
      <PageLayout>
         <Header />
         <Switch>
            <Route path={"/login"}>
               <LoginPage />
            </Route>
            <Route path="/" exact>
               <Homepage />
            </Route>
            <Route path="/wineConfiguration">
               <RecommendationForm />
            </Route>
             <Route path="/recommendations">
                 <Recommendations/>
             </Route>
         </Switch>
         <Footer />
      </PageLayout>
   )
}

export default App

const PageLayout = styled.div`
   background-color: #fffcf2;
`
