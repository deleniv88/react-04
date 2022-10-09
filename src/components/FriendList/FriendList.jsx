import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>{friends.map(friendList => (
            <li className={css.item} key={friendList.id}>
                <FriendListItem friendList={friendList} />
            </li>
        ))}
        </ul>
    );
};
