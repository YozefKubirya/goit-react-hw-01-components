import PropTypes from 'prop-types'
import css from './FriendListItem.module.css'
import { getStatusColor } from 'components/helpers/getStatusColor'
export const FriendListItem = ({avatar,name,isOnline,}) => {
   return <>
      <li className={ css.item} >
             <span
               className={css.status}
               style={{backgroundColor:getStatusColor(isOnline)}}
            ></span>
         <img className={css.avatar} src={avatar} alt="User avatar" width='70px' />
 <p className={css.name}>{name}</p>
</li> 
   </>
}


FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name:PropTypes.string,
  isOnline: PropTypes.bool,
}