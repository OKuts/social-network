import st from './User.module.css';
import userPhoto from '../../../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const User = (props) => {

    const { users, currentPage, pageSize, totalCount } = props.usersPage;
    const pages = Array(Math.ceil(totalCount / pageSize)).fill(0);

    // console.log(props);

    return (
        <>
            <div className={st.select}>
                {pages.map((el, i) => (

                    <span key={i}
                        onClick={() => props.onChangePage(i + 1)}
                        className={i + 1 === currentPage ? `${st.selectedPage} ${st.page}` : `${st.page}`}>
                        {i + 1}
                    </span>))}
            </div>
            {users.map(i => {
                const { id, name, followed, status, location, photos } = i;
                return <div key={id}>
                    <NavLink to={`/profile/${id}`}>
                        <img className={st.img}
                            src={photos.small ? photos.small : userPhoto} alt="logo" />
                    </NavLink >
                    {followed
                        ? <button
                            onClick={() => {
                                let path = `https://social-network.samuraijs.com/api/1.0/follow/${id}`;
                                axios.delete(path, {
                                    withCredentials: true,
                                    headers: { 'API-KEY': 'd4633feb-0512-4c9d-a3fb-0aeeb64a7faf' }
                                }).then(res => {
                                    if (res.data.resultCode == 0) {
                                        props.offFollow(id);
                                    }
                                });
                            }}
                            key={id}>
                            To unfollow
                        </button>
                        : <button
                            onClick={() => {
                                let path = `https://social-network.samuraijs.com/api/1.0/follow/${id}`;
                                axios.post(path, {}, {
                                    withCredentials: true,
                                    headers: { 'API-KEY': 'd4633feb-0512-4c9d-a3fb-0aeeb64a7faf' }
                                }).then(res => {
                                    if (res.data.resultCode == 0) {
                                        props.onFollow(id);
                                    }
                                });
                            }}
                            key={id}>
                            To follow
                        </button>
                    }

                    <div>{name}</div>
                    <div>{status}</div>
                    {/* <div>{'location.city'}</div>
                    <div>{'location.country'}</div> */}
                    <hr />
                </div>
            })}
        </>
    )
}

export default User;