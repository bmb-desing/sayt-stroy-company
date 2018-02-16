export default ({req, error}) => {
  if (req.session.authUser) {
    error({
      message: 'Страница не найдена',
      statusCode: 404
    })
  }
}
