import PropTypes from "prop-types";
import './FriendList.css';

export const FriendListItem = ({ friendList: { isOnline, avatar, name } }) => {
    return (
        <>
            <span className="status" style={{ background: isOnline ? 'red' : 'green' }}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}
