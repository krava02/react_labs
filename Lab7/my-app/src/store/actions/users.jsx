import { addUsersAction } from "../reducers/usersReducer"

export const fetchUsers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addUsersAction(json)))
    }
}