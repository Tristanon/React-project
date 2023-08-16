import PropTypes from "prop-types";
import { useState } from "react";

const AddUser = ({ users, onAddUser}) => {
    const [userExists, setUserExists] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
    });

    const checkUserExists = (currUsername) => {
        for (let user of users) {
            if (user.username === currUsername) {
                return true;
            }
        }
        return false;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userAlreadyExists = checkUserExists(user.username);

        if (!userAlreadyExists) {
            onAddUser(user);
        }

        setUserExists(userAlreadyExists);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setUser({ ...user, [name]: value });
    };

    const isDisabled = () => {
        const { firstName} = user;
        return firstName === "";
    };

    return (
        <div>
            <h1>New User:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="firstName" placeholder="Enter first name" value={user.firstName} onChange={handleInputChange}/>
                    <input type="text" name="lastName" placeholder="Enter last namee" value={user.lastName} onChange={handleInputChange}/>
                    <input type="text" name="username" placeholder="Enter username" value={user.username} onChange={handleInputChange}/>
                </div>
                <button disabled={isDisabled}>Add</button>
            </form>
            {userExists ? (
                <p className="Error">You can not add the user that already exists</p>
            ) : (
              ""
            )}
        </div>
    );
};

AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
};

export default AddUser