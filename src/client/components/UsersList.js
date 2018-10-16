import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount() {}

  renderUsers = () => {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }

  render() {
    return <div>{this.renderUsers()}</div>
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList)
