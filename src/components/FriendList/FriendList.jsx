import React from "react";
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';
import css from './FriendListItem.module.scss';

function FriendList({friends}) {
   
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, isOnline, name }) =>
               
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    isOnline={isOnline}
                    name={name}
                />)
            }
             
        </ul>
    )
 }
    
export default FriendList;


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar:  PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id : PropTypes.number.isRequired,
    })),
}