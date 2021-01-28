const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Usuario = sequelize.define('usuarios',{
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    nombres: {
        type: DataTypes.STRING(1024)
    },
    apellidos:{
        type: DataTypes.STRING(1024)
    },
    email: {
        type: DataTypes.STRING(1024)
    },
    password: {
        type: DataTypes.STRING(1024)
    },
    visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: Sequelize.TRUE 
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

export default Usuario;