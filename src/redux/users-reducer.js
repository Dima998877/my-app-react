
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT= 'SET_TOTAL_USER_COUNT'

const initialState = {
      users: [ ],
      pageSize: 10,
      totalUsersCount: 1,
      currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state, 
            users: state.users.map( u => {
               if (u.id === action.userId) {
                  return {...u, follow: true}
               }
               return u
            })
         } 
      case UNFOLLOW:
         return {
            ...state, 
            users: state.users.map( u => {
               if (u.id === action.userId) {
                  return {...u, follow: false}
               }
               return u
            })
         } 
      case SET_USERS: 
         return {...state, users: action.users}
      case SET_CURRENT_PAGE:
         return {...state, currentPage: action.currentPage}
      case SET_TOTAL_USER_COUNT:
         return {...state, totalUsersCount: action.totalCount}
      default:
         return state;
   }
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUserCountAC = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount })
export default usersReducer
