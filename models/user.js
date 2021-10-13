'use strict';

const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            email : {
                type : Sequelize.STRING(40),
                allowNull : false,
                unique : true,
            },
            nick : {
                type : Sequelize.STRING(15),
                allowNull : false,
            },
            password : {
                type : Sequelize.STRING(100),
                allowNull : true,
            },
            money : {
                type : Sequelize.INTEGER,
                allowNull : false,
                defaultValue : 0,
            },
        }, {
            sequelize,
            timestamps : true,
            paranoid : true,
            modelName : 'User',
            tableName : 'users',
            charset : 'utf8',
            collate : 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.User.hasMany(db.Auction);
    }
};

/*
사용자 모델은 이메일(email), 닉네임(nick), 비밀번호(password), 보유자금(money)으로 구성됩니다. 
사용자가 입찰을 여러번 할 수 있으므로 사용자 모델과 경매 모델도 일대다 관계입니다. 
*/

