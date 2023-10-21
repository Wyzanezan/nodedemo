
const logger = require('../config/logger')
const db = require('../models')
const UserDao = db.user


const userSignUp = (async(req, res) => {
    const params = req.body

    const username = params.username
    const password = params.password

    // 查询用户是否存在
    var userInstance = await UserDao.findOne({where: {username: username}})
    if (userInstance === null) {
        // 用户不存在，创建用户
        userinfo = {
            username: username,
            password: password,
            create_at: Date.now()
        }

        try {
            userInstance = await UserDao.create(userinfo)
        } catch (err) {
            logger.info('create user error: ' + err)

            return res.status(500).send({
                code: 1001,
                msg: err
            })
        }  
    }

    return res.status(200).send({
        code: 1000,
        msg: 'success'
    })
})

const userSignIn = (async(req, res) => {
    const params = req.body

    const username = params.username
    const password = params.password

    var userInstance = await UserDao.findOne({where: {username: username}})
    if (userInstance !== null) {
        if (userInstance.password === password) {
            return res.status(200).send({
                code: 1000,
                msg: 'success'
            })
        }
    }

    return res.status(200).send({
        code: 1001,
        msg: 'failed'
    })

})

const userSignOut = (async(req, res) => {

})


module.exports = {
    userSignUp,
    userSignIn,
    userSignOut
}