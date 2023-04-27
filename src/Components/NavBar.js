import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/authSlice";
import UserMenu from "./UserMenu";

export const NavBar = () => {
    const isLogedIn = useSelector(state => state.user.isLogedIn)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        dispatch(login(form.elements.login.value));
        form.reset();
    }
    return(
        <div>
            {isLogedIn && <UserMenu/>}
            <div>log in</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="login"/>
                <button type="submit">Log in</button>
            </form>
            
        </div>
    )
}

export default NavBar;