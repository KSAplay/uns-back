import Seccion from "./Seccion";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Tema = sequelize.define('temas',{
    id_tema: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    descripcion: {
        type: DataTypes.STRING(1024)
    },
    color_titulo:{
        type: DataTypes.STRING(7)
    },
    color_fondo: {
        type: DataTypes.STRING(7)
    },
    color_flecha_carrousel: {
        type: DataTypes.STRING(7)
    },
    color_btn_carrousel_relleno_activo: {
        type: DataTypes.STRING(7)
    },
    color_btn_carrousel_borde_activo: {
        type: DataTypes.STRING(7)
    },
    color_btn_carrousel_borde_inactivo: {
        type: DataTypes.STRING(7)
    }

},{
    timestamps: false
}
);

Tema.hasMany(Seccion,{foreignKey: 'id_tema',sourceKey: 'id_tema'});
Seccion.belongsTo(Tema, {foreignKey:'id_tema', sourceKey: 'id_tema'});

export default Tema;