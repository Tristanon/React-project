const UserList = ({ users, usersWhoLikedMovie}) => {
    if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
        return <p>None of the current users liked this movie.</p>
    }
    
    const listofItems = usersWhoLikedMovie.map((id) => (
        <li key={id}>
            <p>{users[id].name}</p>
        </li>
    ));

    return <ul>{listofItems}</ul>
};

export default UserList;