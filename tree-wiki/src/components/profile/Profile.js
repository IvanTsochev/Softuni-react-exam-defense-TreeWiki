import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import styles from './Profile.module.css';

export const Profile = () => {
    const {userEmail, username, gender} = useContext(AuthContext);

    return (
        <div>
            <div className={styles.profile}>
                <div className={styles.profileImage}>
                    {gender.toLowerCase() === "male" && <img src="avatars/maleAvatar.jpg" alt="Profile Picture" />}

                    {gender.toLowerCase() === "female" && <img src="avatars/femaleAvatar.jpg" alt="Profile Picture" />}

                    {(gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") 
                    && <img src="avatars/otherAvatar.jpg" alt="Profile Picture" />}
                </div>
                <div className={styles.profileInfo}>
                    <h2>Name: {username}</h2>
                    <p>Email: {userEmail}</p>
                    <p>Gender: {gender}</p>
                </div>
            </div>
        </div>
    );
};