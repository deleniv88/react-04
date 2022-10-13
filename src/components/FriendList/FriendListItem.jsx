import PropTypes from "prop-types";
import css from './FriendList.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={css.item}>
            <span className={css.status} style={{ background: isOnline ? 'red' : 'green' }}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}
