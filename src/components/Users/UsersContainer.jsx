import React from "react";
import {connect} from "react-redux";
import {
    acceptFollow,
    setCurrentPage,
    setToggleFollowingProgress,
    setToggleIsFetching,
    acceptUnFollow, follow, unFollow, requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                {this.props.isFetching === false ? <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                /> : ""}

            </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    acceptFollow,
    acceptUnFollow,
    setCurrentPage,
    setToggleIsFetching,
    setToggleFollowingProgress,
    getUsers: requestUsers,
    follow,
    unFollow
})(UsersContainer);