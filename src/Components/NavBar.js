import { useDispatch } from "react-redux";
import { login } from "../Redux/authSlice";

export const NavBar = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        dispatch(login(form.elements.login.value))
    }
    return(
        <div>
            <h1>test redux app</h1>
            <div>log in</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="login"/>
                <button type="submit">Log in</button>
            </form>
            
        </div>
    )
}

export default NavBar;