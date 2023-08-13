import MovieCard from "./MovieCard";

const Dashboard = ({ usersByMovie, users, movies}) => {
    const MovieCards = Object.keys(movies).map((id) => (
        <MovieCard
            key={id}
            users={users}
            usersWhoLikedMovie={usersByMovie[id]}
            movieInfo={movies[id]}
        />
    ));

    return <ul>{MovieCards}</ul>
};

export default Dashboard;





