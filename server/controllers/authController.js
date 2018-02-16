import {user} from '../models/index'
import crypt from '../helpers/hashPassword'

export default {
  login: (req, res) => {
    user.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      const pass = crypt.decrypt(req.body.password, user.password)
      if (pass) {
        req.session.authUser = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }
        res.status(200).send(user)
      } else {
        res.status(401).send([
          {
            message: 'Неверный пароль'
          }
        ])
      }
    }).catch((e) => {
      res.status(400).send([
        {
          message: 'Пользователь не найден'
        }
      ])
    })
  },
  logout: (req, res) => {
    req.session.authUser = null
    res.json({
      status: true
    })
  }
}
