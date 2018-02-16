export default {
  isAuth: (req, res, next) => {
    if (req.session.authUser) {
      next()
    } else {
      res.status(403).send({
        message: 'Вы не авторизированны'
      })
    }
  }
}
