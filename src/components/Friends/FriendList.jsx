import PropTypes from 'prop-types';
import css from './Friends.module.css';
function getStatusColor(isOnline) {
   return isOnline ? 'green' : 'red';
}

export const FriendList = ({ friends }) => {
 return  (<ul className={css.friendList} >
      {friends.map(friend => (
         <li className={ css.item} key={friend.id}>
             <span
               className={css.status}
               style={{backgroundColor:getStatusColor(friend.isOnline)}}
            ></span>
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width='70px' />
 <p className={css.name}>{friend.name}</p>
</li>))}
</ul>)
};
FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
         id:PropTypes.number.isRequired,
      })
   )
};