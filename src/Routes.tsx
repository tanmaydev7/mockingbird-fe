import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'
import Login from "@/pages/Login"
import SignUp from "@/pages/Signup"
import LandingLayout from './layouts/LandingLayout'
import { RoutesPath } from './constants/routes'
type Props = {}


const RoutesManager = (_props: Props) => {
  return (
    <Routes>
        <Route path={RoutesPath.LANDING_PAGE} element={<LandingLayout/>}>
          <Route index={true} element={<LandingPage/>}  />
            <Route path={RoutesPath.LOGIN} element={<Login/>}  />
            <Route path={RoutesPath.SIGNUP} element={<SignUp/>}  />
        </Route>
    </Routes>
  )
}

export default RoutesManager