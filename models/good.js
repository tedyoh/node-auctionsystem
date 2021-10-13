'use strict';

const Sequelize = require('sequelize');

module.exports = class Good extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name : {
                type : Sequelize.STRING(40),
                allowNull : false,
            },
            img : {
                type : Sequelize.STRING(20),
                allowNull : true,
            },
            price : {
                type : Sequelize.INTEGER,
                allowNull : false,
                defaultValue : 0,
            },
        }, {
            sequelize,
            timestamps : true,
            modelName : 'Good',
            tableName : "goods",
            charset : 'utf8',
            collate : 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Good.belongsTo(db.User, {as:'Owner'});
        db.Good.belongsTo(db.User, {as:'Sold'});
        db.Good.hasMany(db.Auction);
    }
};

/*
상품 모델은 상품명(name), 상품사진(img), 시작가격(price)으로 구성됩니다. 
사용자 모델과 상품 모델간에는 일대다 관계가 두번 적용됩니다. 
사용자가 여러 상품을 등록할 수 있고, 사용자가 여러 상품을 낙찰 받을 수 있기 때문입니다. 
등록한 상품과 낙찰받은 상품, 두 관계를 구별하기 위해 as 속성에 각각 Owner, Sold 로 관계명을 적었습니다. 
각각 OwnerId , SoldId 컬럼으로 상품모델에 추가됩니다. 
한 상품에 여러 명이 입찰하므로 상품 모델과 경매 모델도 일대 다 관계입니다. 
*/