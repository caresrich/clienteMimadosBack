import Sequelize from 'sequelize';
import { db } from '../database/database';

const VentaPrenda = db.define('ventaPrendas', {
    idVentaPrenda: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    idVenta: {
        type: Sequelize.INTEGER
    },
    idPrenda: {
        type: Sequelize.INTEGER
    },
    detalle: {
        type: Sequelize.TEXT
    },
    cantidad: {
        type: Sequelize.INTEGER
    },
    precio: {
        type: Sequelize.DECIMAL
    },
    estadoVenPre: {
        type: Sequelize.BOOLEAN
    },
    fechaRegVenPre: {
        type: Sequelize.DATE
    }
},
    {
        timestamps: false
    }
);

export default VentaPrenda;