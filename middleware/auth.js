export default ({req, error, store}) => {
  const auth = req.session.authUser
  // const str = store.getters.auth
  if (!auth) {
    store.state.User.user = {}
    store.state.User.auth = false
    error({
      message: 'У вас нет прав на просмотр этой страницы',
      statusCode: 403
    })
  } else {
    store.state.User.user = auth
    store.state.User.auth = true
  }
}
