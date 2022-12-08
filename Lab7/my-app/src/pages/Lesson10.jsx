import {useDispatch, useSelector} from "react-redux";
import {increaseCounterAction, decreaseCounterAction} from "../store/reducers/counterReducer"
import {addUserAction, removeUserAction} from "../store/reducers/usersReducer";
import {fetchUsers} from "../store/actions/users";

const Lesson10 = () => {
    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter.value);

    const topic = useSelector(state => state.counter.lesson.topic);

    const users = useSelector(state => state.users.array);

    const increase = () => {
        dispatch(increaseCounterAction());
    }
    const decrease = () => {
        dispatch(decreaseCounterAction());
    }

    const addUser = () => {
        const date = Date.now()
        const user = {
            name: `Petya ${date}`,
            id: date
        }
        dispatch(addUserAction(user));
    }
    const removeUser = (id) => {
        dispatch(removeUserAction(id));
    }
    const fetchUsersHandler = () => {
        dispatch(fetchUsers());
    }

    return (
        <div>
            <div>
                Lesson: {topic}

                <br/>
                Counter: {counter}
                <br/>
                <button onClick={increase}>Increase counter</button>
                <button onClick={decrease}>Decrease counter</button>
            </div>

            <div>
                <button onClick={addUser}>Add user</button>
                <button onClick={fetchUsersHandler}>Add users from fakeAPI</button>

                {users.length ?
                    <div>
                        <h3>Users</h3>
                        {users.map(user =>
                            <div id={user.id.toString(16)} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                    </div>
                    :
                    <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export {Lesson10}