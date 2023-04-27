import { useSelector, useDispatch } from "react-redux"
import { logout } from "../Redux/authSlice"

export const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.login)
    return (
        <div>
            {user}
            <button onClick={() => dispatch(logout())}>Log out</button>
        </div>
    )
}

export default UserMenu