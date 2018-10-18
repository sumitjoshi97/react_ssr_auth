// action types consts
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'
export const FETCH_ADMINS = 'FETCH_ADMINS'


// action creators

//action to fetch all users 
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users')
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}

// action to fetch current logged-in user
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user')

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}

export const fetchAdmins = () => async (dispatch, getaState, api) => {
  const res = await api.get('/admins')

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  })
}
