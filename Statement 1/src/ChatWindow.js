import PropTypes from "prop-types"
import AddMessage from "./AddMessage";
import MessagesHistory from "./MessagesHistory";

const ChatWindow = ({user, messages, onMessage}) => {
    const handleOnMessage = (message) => {
        onMessage(user.username ,message);
    };

    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            <MessagesHistory messages={messages} user={user} />
            <AddMessage onMessage={handleOnMessage} />
        </div>
    )
};

ChatWindow.propTypes = {
    onMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    message: PropTypes.array.isRequired
};

export default ChatWindow;