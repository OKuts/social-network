import React from 'react';
import Posts from './Posts/Posts'
import Preloader from '../Users/Preloader/Preloader';
import st from './Profile.module.css';
import font from '../../../assets/img/fon.png';

const textArea = React.createRef();

const Profile = (props) => {
    // console.log(props);
    if (!props.profilePage.currentUser) {
        return <Preloader />
    }
    return (
        <div>
            <div>

                <img className={st.img} src={font} alt="" />
                <textarea ref={textArea}
                    onChange={() => props.inputPost(textArea.current.value)}
                    value={props.profilePage.areaValue} />
                <button onClick={() => props.addPost()}>Send</button>
                <img
                    className={st.img_icon}
                    src={props.profilePage.currentUser.photos.small}
                    alt="user" />
            </div>
            <hr />
            <Posts posts={props.profilePage.posts} />
        </div>
    )
}

export default Profile;