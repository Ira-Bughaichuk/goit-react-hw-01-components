import React from "react";
import PropTypes from 'prop-types';

import css from './FriendListItem.module.scss';

function FriendListItem({ avatar, name, isOnline}) {
  
    return(
        <li  className={css.item}>
         <span className={isOnline  ? css.item__statusGreen : css.item__statusRed}></span>
            <img className={css.item__avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.item__name}>{name}</p>
        </li>
   )
}
export default FriendListItem;

FriendListItem.propTypes = {
    avatar:  PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,  
}
