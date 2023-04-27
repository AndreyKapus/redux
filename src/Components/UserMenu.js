import { useSelector } from "react-redux"

export const UserMenu = () => {
    const user = useSelector(state => state.user.login)
    return (
        <div>
            <div>{user}</div>
            <button type="button">Log out</button>
        </div>
    )
}

export default UserMenu