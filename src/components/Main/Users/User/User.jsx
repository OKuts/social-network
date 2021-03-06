import st from './User.module.css';
import userPhoto from '../../../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
const User = (props) => {

    const { users, currentPage, pageSize, totalCount, isBtnActive } = props.usersPage;
    const pages = Array(Math.ceil(totalCount / pageSize)).fill(0);

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
                        ? <button disabled={isBtnActive.some(i => i === id)}
                            onClick={() => props.setFollow(id, 'delete')}
                            key={id}>
                            To unfollow
                        </button>
                        : <button disabled={isBtnActive.some(i => i === id)}
                            onClick={() => props.setFollow(id, 'post')}
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