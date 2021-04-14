import * as axios from 'axios';
import React from 'react';
import st from './Users.module.css';
import userPhoto from '../../../assets/img/logo.png';

class UsersClass extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=3&count=3')
            .then(res => this.props.setUsers(res.data.items));
    }

    render() {
        return (
            <>
                <span>1</span>
                <span className={st.selectedPage}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                { this.props.usersPage.users.map(i => {
                    const { id, name, followed, status, location, photos } = i;
                    return (
                        <div key={id}>
                            <img className={st.img}
                                src={photos.small ? photos.small : userPhoto} alt="logo" />
                            <button
                                onClick={() => this.props.changeFollow(id)}
                                id={id}
                                key={id}>
                                {followed ? 'Yes' : 'No'}
                            </button>
                            <div>Id:{id} -{'>'} {name}</div>
                            <div>{status}</div>
                            {/* <div>{'location.city'}</div>
                            <div>{'location.country'}</div> */}
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default UsersClass;