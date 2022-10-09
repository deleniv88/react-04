import { FriendListItem } from "./FriendListItem";
import './FriendList.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">{friends.map(friendList => (
            <li className="item" key={friendList.id}>
                <FriendListItem friendList={friendList} />
            </li>
        ))}
        </ul>
    );
};
