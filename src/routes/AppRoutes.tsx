import { Routes, Route } from "react-router-dom"
import StartPage from "../pages/startPage/StartPage"

const AppRoutes = () => {
  return (
    <Routes>
            <Route path="/" element={<StartPage />}></Route>
    </Routes>
  )
}

export default AppRoutes