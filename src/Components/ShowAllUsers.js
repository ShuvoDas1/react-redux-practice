import React from 'react';
import { connect } from 'react-redux'

const ShowAllUsers = ({ newUsers }) => {
    return newUsers.loading ? (
        <h2>Loading..</h2>
    ) : newUsers.error ? (
        <h2>{newUsers.error}</h2>
    ) : (
                <div className='mt-5'>
                    <h2>Users</h2>
                    {
                        newUsers && newUsers.users && newUsers.users.map(user => <h3>{user.newUserObj.email}</h3>)
                    }
                </div>
            )
};

const mapStoreToProps = state => {
    return {
        newUsers: state.newUser
    }
}

export default connect(mapStoreToProps)(ShowAllUsers);