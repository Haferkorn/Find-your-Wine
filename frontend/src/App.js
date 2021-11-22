import "./App.css"
import { Route, Switch, useHistory } from "react-router"
import styled from "styled-components/macro"
import Header from "./components/header/Header"
import LoginPage from "./components/pages/login/LoginPage"
import Homepage from "./components/pages/homepage/Homepage"
import RecommendationForm from "./components/pages/recommandationForm/RecommendationForm"
import Footer from "./components/footer/Footer"
import Recommendations from "./components/pages/recommandations/Recommendations"
import { useState } from "react"
import { getRecommendations } from "./utils/apiService/WineAPIService"
import SignUpPage from "./components/pages/sign-up/Sign-up-Page"
import WineRankingPage from "./components/pages/wineRanking/WineRankingPage"
import PrivateRoute from "./utils/PrivateRoute"

function App() {
   const [wineConfiguration, setWineConfiguration] = useState({
      occasion: "",
      wineStyle: "",
      region: "",
      alcohol: "",
      taste: "",
   })
   const [recommendations, setRecommendations] = useState([])

   const history = useHistory()

   const handleSubmit = () => {
      getRecommendations(wineConfiguration).then((result) => {
         setRecommendations(result)
      })
      history.push("/recommendations")
   }

   const handleDataInput = (name, value) => {
      setWineConfiguration({ ...wineConfiguration, [name]: value })
   }

   return (
      <PageLayout>
         <Header />
         <Switch>
            <Route path={"/login"}>
               <LoginPage />
            </Route>
            <Route path={"/sign-up"}>
               <SignUpPage />
            </Route>
            <Route path="/" exact>
               <Homepage />
            </Route>
            <Route path="/wineConfiguration">
               <RecommendationForm
                  handleSubmit={handleSubmit}
                  handleDataInput={handleDataInput}
                  wineConfiguration={wineConfiguration}
               />
            </Route>
            <Route path="/recommendations">
               <Recommendations recommendations={recommendations} />
            </Route>
            <PrivateRoute path="/wineRanking">
               <WineRankingPage />
            </PrivateRoute>
         </Switch>
         <Footer />
      </PageLayout>
   )
}

export default App

const PageLayout = styled.div`
   width: 100%;
   padding-bottom: 200px;
`
