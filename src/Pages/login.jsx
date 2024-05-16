import AutLayouts from "../Components/Layouts/AutLayouts"
import FormLogin from "../Components/Fragments/FormLogin"
const LoginPage = () => {
    return (
        <AutLayouts title="Login" type="login">
            <FormLogin/>
        </AutLayouts>
    )
}

export default LoginPage;