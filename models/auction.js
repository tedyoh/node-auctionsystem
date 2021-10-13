'use strict';

const Sequelize = require('sequelize');

module.exports = class Auction extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            bid : {
                type : Sequelize.INTEGER,
                allowNull : false,
                defaultValue : 0,
            },
            msg : {
                type : Sequelize.STRING(100),
                allowNull : true,
            },
        }, {
            sequelize,
            timestamps : true,
            paranoid : true,
            modelName : 'Auction',
            tableName : 'auctions',
            charset : 'utf8',
            collate : 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Auction.belongsTo(db.User);
        db.Auction.belongsTo(db.Good);
    }
};

/*
마지막으로 경매 모델은 입찰가(bid)와 입찰 시 메시지(msg)로 구성됩니다. 
입찰 시 메시지는 null 이어도 됩니다. 
경매 모델은 사용자 모델 및 상품 모델과 일대다 관계에 있습니다. 
경매 모델에는 UserId 컬럼과 GoodId  컬럼이 생성됩니다. 
*/