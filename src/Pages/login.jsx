import AutLayouts from "../Components/Layouts/AutLayouts"
import FormLogin from "../Components/Fragments/FormLogin"
import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
        <AutLayouts title="Login">
            <FormLogin/>
            <p className="text-sm mt-5 text-center">Don't have an account? <Link className="font-bold text-blue-600" to="/register">Sign up</Link></p>
        </AutLayouts>
    )
}

export default LoginPage;