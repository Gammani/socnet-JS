import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatusProfile, updateStatusProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 6734;
        }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);
    }

    render() {
        return (
            <div className={s.wrapper}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter)(ProfileContainer);

// withAuthRedirect