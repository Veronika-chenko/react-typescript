import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
    // onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        // <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid grey'}}>
        //  {user.id}. {user.name} lives in {user.address.city} city on {user.address.street} street
        // </div>
        <div style={{padding: 15, border: '1px solid grey'}}>
            <Link to={`/users/${user.id}`} >
                {user.id}. {user.name} lives in {user.address.city} city on {user.address.street} street
            </Link>
        </div>
    )
};

export default UserItem;