const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_ROTATION = 'CHANGE_ROTATION'

const initState = {
    users: [],
    pageSize: 8,
    totalCount: 100,
    currentPage: 1,
    isRotation: false
}

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case FOLLOW:
            const stateCopy = { ...{}, ...state };
            stateCopy.users = state.users.map(item =>
                action.id === item.id ? { ...item, followed: !item.followed } : item);
            return stateCopy;

        case SET_USERS:
            return { ...state, users: [...action.users] };

        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount };

        case CHANGE_PAGE:
            return { ...state, currentPage: action.newPage };

        case CHANGE_ROTATION:
            return { ...state, isRotation: action.isRotation };

        default: return state;
    }
}


export const changeFollow = (id) => ({ type: FOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changePage = (newPage) => ({ type: CHANGE_PAGE, newPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const changeRotation = (isRotation) => ({ type: CHANGE_ROTATION, isRotation });

export default usersReducer;