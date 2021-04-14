import st from './User.module.css';
import userPhoto from '../../../../assets/img/logo.png';

const User = (props) => {

    const { users, currentPage, pageSize, totalCount } = props.usersPage;
    const pages = Array(Math.ceil(totalCount / pageSize)).fill(0);

    console.log(props);

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

                    <img className={st.img}
                        src={photos.small ? photos.small : userPhoto} alt="logo" />
                    <button
                        onClick={() => props.changeFollow(id)}
                        id={id}
                        key={id}>
                        {followed ? 'Yes' : 'No'}
                    </button>
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