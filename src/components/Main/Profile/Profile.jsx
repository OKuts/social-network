import React from 'react';
import Posts from './Posts/Posts'
import Preloader from '../Users/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import st from './Profile.module.css';
// import font from '../../../assets/img/fon.png';

const textArea = React.createRef();

const Profile = (props) => {

    if (!props.profilePage.currentUser) {
        return <Preloader />
    }
    console.log(props);
    return (
        <div>
            {/* <img className={st.img} src={font} alt="" /> */}
            <ProfileInfo
            profilePage={props.profilePage}
            updateUserStatus = {props.updateUserStatus}
            />
            <textarea ref={textArea}
                onChange={() => props.inputPost(textArea.current.value)}
                value={props.profilePage.areaValue} />
            <button onClick={() => props.addPost()}>Send</button>
            <hr />
            <Posts posts={props.profilePage.posts} />
        </div>
    )
}

export default Profile;