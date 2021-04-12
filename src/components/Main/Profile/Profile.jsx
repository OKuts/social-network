import React from 'react';
import Posts from './Posts/Posts'
import st from './Profile.module.css';
const textArea = React.createRef();

const Profile = (props) => {
    return (
        <div>
            <div>
                <img className={st.img} src="./fon.png" alt="" />
                <textarea ref={textArea}
                    onChange={() => props.onChangeTextArea(textArea.current.value)}
                    value={props.profilePage.areaValue} />
                <button onClick={() => props.addPost()}>Send</button>
            </div>
            <hr />
            <Posts posts={props.profilePage.posts} />
        </div>
    )
}

export default Profile;