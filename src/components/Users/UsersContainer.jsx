import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => { dispatch(followAC(userId)) },
      unfollow: (userId) => { dispatch(unfollowAC(userId)) },
      setUsers: (users) => { dispatch(setUsersAC(users)) },
      setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
      setTotalUsersCount: (totalCount) => {dispatch(setTotalUserCountAC(totalCount))}
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

