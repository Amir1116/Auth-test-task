import React from 'react';
import './profile-page-style.scss';

const ProfilePage = ({user}) =>{
    return(
        <div className='container mt-3'>
            <h1 className='card-header greeting-profile '>Welcome! <span className='profile-name' >{user}</span></h1>
            <div className='card text-white bg-dark mb-3 d-flex align-items-center justify-content-center profile-data'>

            <p className='profile__text'>This'is Your Private Page</p>
            </div>
        </div>
    )
}

export default ProfilePage;