const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
  id:{
    type:DataTypes.INTEGER,
    AllowNull:false,
    autoIncrement:true,
    primaryKey:true

    },
    tag_id:{
      type:DataTypes.INTEGER,
      AllowNull:false,

      references: { model: 'tag', key: 'id' }



    }
    ,
    product_id:{
      type:DataTypes.INTEGER,
      AllowNull:false,

      references:{
        model:'product',
        key:'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
