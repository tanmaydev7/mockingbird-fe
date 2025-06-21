import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'
import Login from "@/pages/Login"
import SignUp from "@/pages/Signup"
import LandingLayout from './layouts/LandingLayout'
import { RoutesPath } from './constants/routes'
import Demo from './pages/Demo'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

type Props = {}

const RoutesManager = (_props: Props) => {
  return (
    <Routes>
        <Route path={RoutesPath.HOME} element={<LandingLayout/>}>
          <Route index={true} element={<LandingPage/>}  />
            <Route path={RoutesPath.DEMO} element={<Demo/>}/>
        </Route>
        <Route path={RoutesPath.LOGIN} element={<Login/>}  />
        <Route path={RoutesPath.SIGNUP} element={<SignUp/>}  />
        <Route path={RoutesPath.FORGOT_PASSWORD} element={<ForgotPassword/>}  />
        <Route path={RoutesPath.RESET_PASSWORD} element={<ResetPassword/>}  />
    </Routes>
  )
}

export default RoutesManager