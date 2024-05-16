import AutLayouts from "../Components/Layouts/AutLayouts"
import FormRegister from "../Components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AutLayouts title="Register">
            <FormRegister/>
            <p className="text-sm mt-5 text-center"> have an account? <Link className="font-bold text-blue-600" to="/login">Sign in</Link></p>
        </AutLayouts>
    )
}

export default RegisterPage;