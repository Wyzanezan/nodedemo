const {DataTypes} = require('sequelize')

const user = (sequelize) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            comment: '主键id'
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            coment: '用户名'
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            comment: '密码'
        },
        age: {
            type: DataTypes.INTEGER,
            commnet: '用户年龄'
        },
        introduce: {
            type: DataTypes.STRING(512),
            allowNull: false,
            defaultValue: '',
            comment: '用户介绍'
        }
    }, {
        timestamps: true,
        createdAt: 'create_at',
        updatedAt: 'update_at'
    })
}

module.exports = {
    user
}