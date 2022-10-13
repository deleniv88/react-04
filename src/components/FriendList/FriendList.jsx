import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>{friends.map(friend => (
            <FriendListItem key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name} />
        ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired
        })
    )
}