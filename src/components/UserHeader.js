import React, { Component } from 'react';
import { connect } from 'react-redux';
import { featchUser } from '../actions/';


class UserHeader extends Component {
    componentDidMount() {
        this.props.featchUser(this.props.userId);
    }
    render() {
        const user = this.props.users.find((user) => user.id === this.props.userId);

        if (!user) {
            return null;
        }
        return <div className="heder">{user.name}</div>;
    }
}

const mapStateToProps = state => {

    return { users: state.users }
};

export default connect(mapStateToProps, { featchUser })(UserHeader);