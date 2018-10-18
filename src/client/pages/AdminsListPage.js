import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'

import requireAuth from '../components/hocs/requireAuth'

export class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchaAdmins()
  }

  renderAdmins = () => {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>)
  }

  render() {
    return (
      <div>
        <h3>List of Admins</h3>
        {this.renderAdmins()}
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => ({
  admins
})

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}
