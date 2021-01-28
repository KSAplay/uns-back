const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Menu = sequelize.define('menus',{
    id_menu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    id_parent: {
        type: DataTypes.INTEGER,
    },
    nombre:{
        type: DataTypes.STRING(250)
    },
    orden: {
        type: DataTypes.INTEGER
    },
    ruta:{
        type: DataTypes.STRING(1024)
    },
    visible: {
        type: DataTypes.BOOLEAN 
    },
    create_at:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    update_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
},{
    timestamps: false
}
);

Menu.hasMany(Menu,{as: 'children',foreignKey: 'id_parent',sourceKey: 'id_menu'});
//Menu.belongsTo(Menu, {as: 'data',foreignKey:'id_menu', sourceKey: 'id_parent'});


export default Menu;