import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import createStore from '../store/store'

const store = createStore()

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

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

export const loadData = () => {
  store.dispatch(fetchUsers())
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList)
