const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Slider = sequelize.define('sliders',{
    id_slider: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    nombre_imagen:{
        type: DataTypes.STRING(1024)
    },
    host_imagen:{
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

export default Slider;